interface TimeLineItemProps {
  date: string;
  details: string[];
  duration?: number;
  employer: string;
  position: string;
  stack?: string[];
}

const TimelineItem = ({
  date,
  details,
  duration,
  employer,
  position,
  stack,
}: TimeLineItemProps) => {
  return (
    <li className="mb-10 ml-4">
      {/* TODO: cambiar este div vacio por algo mas representativo, algo como ul con un li para que sea mas semantico */}
      <div className="absolute w-3 h-3 bg-yellow-700 rounded-full mt-1.5 border border-white -left-1.5 "></div>
      <div className="sm:flex items-center space-x-1">
        {duration && (
          <div className="rounded-md px-3 bg-yellow-500">
            <div className="text-base font-semibold">
              {duration > 1
                ? `Antiguedad: ${duration} meses`
                : "Recien ingresado"}
            </div>
          </div>
        )}
        <p className="text-base font-bold">
          {position} en {employer}.
        </p>

        <p className="text-sm">
          {duration && duration > 1 && `Ingreso: ${date}`}
        </p>
      </div>
      <div>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      {stack && stack.length > 0 && (
        <p className="pt-3">
          <span className="font-bold pr-2">stack:</span>
          <b className="text-yellow-600">{stack.join(", ")}</b>
        </p>
      )}
    </li>
  );
};

export default TimelineItem;
