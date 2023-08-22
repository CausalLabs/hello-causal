import Link from "next/link";
import { ReactNode } from "react";
import s from "./HCButton.module.css";

export function HCButton({
  children,
  href,
  onClick,
  target,
  disabled,
  width,
  className: _className,
  ...rest
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  disabled?: boolean;
  width?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLButtonElement>) {
  if (href == undefined && onClick == undefined) {
    console.error(
      "HCButton: href and onClick are both undefined. Please define one."
    );
  }

  if (href != undefined && onClick != undefined) {
    console.error(
      "HCButton: href and onClick are both defined. Please only define one."
    );
  }

  let className =
    s["hc-button"] + " text-white font-semibold py-2 px-7 rounded-full ";
  if (disabled) className += s.disabled + " ";
  className += _className ?? "";
  const style = {
    width: width,
  };

  const LinkContainer = disabled ? "div" : Link;

  return onClick ? (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <div className={"flex "} {...rest}>
      <LinkContainer
        className={className}
        href={href ?? ""}
        target={target}
        onClick={onClick}
      >
        <div className="flex items-center justify-center w-auto" style={style}>
          {children}
        </div>
      </LinkContainer>
    </div>
  );
}
