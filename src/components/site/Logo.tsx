import logoDark from "/logo-udental-dark.svg?url";
import logoLight from "/logo-udental-light.svg?url";

type Props = { variant?: "dark" | "light"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const src = variant === "dark" ? logoDark : logoLight;
  return (
    <img
      src={src}
      alt="U-Dental Clinic"
      className={`h-13 sm:h-15 lg:h-20 w-auto ${className}`}
    />
  );
}
