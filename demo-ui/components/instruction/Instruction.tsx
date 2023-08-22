import { ReactNode } from "react";

export function Instruction({
  num,
  children,
  className,
  style,
  ...divAttributes
}: {
  num: number | undefined;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "instruction flex items-start pl-6 pr-6 pt-3 pb-3 shadow-md rounded-br-md w-full " +
        (className ?? "")
      }
      style={{
        borderLeft:
          num == undefined ? undefined : "4px solid var(--dark-green)",
        ...style,
      }}
      {...divAttributes}
    >
      {num != undefined && (
        <div
          className="mr-4 text-4xl shadow-none"
          style={{ fontFamily: "Lora", filter: "none" }}
        >
          {num}.
        </div>
      )}

      <div className="shadow-none w-full">{children}</div>
    </div>
  );
}
