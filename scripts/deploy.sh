#!/usr/bin/env sh
set -eu

IMAGE_TAG="${1:-}"
APP_DIR="${APP_DIR:-/opt/apps/portfolio}"
COMPOSE_FILE="${APP_DIR}/compose.yml"
NEXT_COMPOSE="${APP_DIR}/compose.next.yml"
PREVIOUS_COMPOSE="${APP_DIR}/compose.previous.yml"
ENV_FILE="${APP_DIR}/.env"
PREVIOUS_ENV="${APP_DIR}/.env.previous"
NEXT_ENV="${APP_DIR}/.env.next"

case "$IMAGE_TAG" in
  sha-[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]) ;;
  *) echo "Invalid image tag: expected sha- followed by 40 lowercase hex characters" >&2; exit 2 ;;
esac

cd "$APP_DIR"
test -f "$NEXT_COMPOSE"

IMAGE_TAG="$IMAGE_TAG" docker compose -f "$NEXT_COMPOSE" config -q

had_previous=false
if [ -f "$ENV_FILE" ]; then
  cp "$ENV_FILE" "$PREVIOUS_ENV"
  had_previous=true
fi

had_previous_compose=false
if [ -f "$COMPOSE_FILE" ]; then
  cp "$COMPOSE_FILE" "$PREVIOUS_COMPOSE"
  had_previous_compose=true
fi

printf 'IMAGE_TAG=%s\n' "$IMAGE_TAG" > "$NEXT_ENV"
chmod 600 "$NEXT_ENV"
mv "$NEXT_ENV" "$ENV_FILE"
mv "$NEXT_COMPOSE" "$COMPOSE_FILE"

rollback() {
  echo "Deployment failed; restoring previous release" >&2
  if [ "$had_previous_compose" = true ] && [ "$had_previous" = true ]; then
    mv "$PREVIOUS_COMPOSE" "$COMPOSE_FILE"
    mv "$PREVIOUS_ENV" "$ENV_FILE"
    docker compose -f "$COMPOSE_FILE" pull web
    docker compose -f "$COMPOSE_FILE" up -d --wait --wait-timeout 60
  else
    docker compose -f "$COMPOSE_FILE" down || true
    rm -f "$COMPOSE_FILE" "$ENV_FILE" "$PREVIOUS_COMPOSE" "$PREVIOUS_ENV"
  fi
}

trap rollback HUP INT TERM

if ! docker compose -f "$COMPOSE_FILE" config -q \
  || ! docker compose -f "$COMPOSE_FILE" pull web \
  || ! docker compose -f "$COMPOSE_FILE" up -d --wait --wait-timeout 60 \
  || ! curl --fail --silent --show-error --retry 5 --retry-all-errors https://ihribernik.ar/ >/dev/null; then
  rollback
  exit 1
fi

trap - HUP INT TERM
rm -f "$PREVIOUS_ENV" "$PREVIOUS_COMPOSE"
echo "Deployed ${IMAGE_TAG}"
