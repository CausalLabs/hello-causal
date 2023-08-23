import { ReactNode } from "react";

export function Note({
  children,
  className,
  style,
  ...divAttributes
}: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={"flex items-start px-6 py-3 rounded-md " + (className ?? "")}
      style={{
        borderRadius: "10px",
        background: "rgba(243, 244, 245, 0.5)",
        ...style,
      }}
      {...divAttributes}
    >
      <div style={{ width: "44px" }}>
        <img
          src="/note-mark.svg"
          style={{
            height: "24px",
            width: "24px",
            zIndex: 100,
            fill: "black",
          }}
        />
      </div>
      <div style={{ width: "calc(100% - 44px" }}>{children}</div>
    </div>
  );
}
