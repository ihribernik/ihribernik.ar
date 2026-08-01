FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.28-alpine

ARG VCS_REF="unknown"

LABEL org.opencontainers.image.title="ihribernik.ar" \
      org.opencontainers.image.description="Claudio Ivan Hribernik's portfolio" \
      org.opencontainers.image.source="https://github.com/ihribernik/ihribernik.ar" \
      org.opencontainers.image.revision="${VCS_REF}"

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
