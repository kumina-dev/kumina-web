import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
};

function cx(variant: Variant, className?: string) {
  return [styles.button, styles[variant], className].filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={cx(variant, className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={cx(variant, className)} {...props} />;
}
