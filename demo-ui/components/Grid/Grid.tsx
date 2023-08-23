import s from "./Grid.module.css";

export function Grid({
  className: _className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  let className = s.grid + " flex justify-center items-center w-full h-[500px]";
  if (_className) className += " " + _className;

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
