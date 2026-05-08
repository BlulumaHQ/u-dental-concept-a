import logoDark from "/logo-udental-dark.svg?url";
import logoLight from "/logo-udental-light.svg?url";

type Props = { variant?: "dark" | "light"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const src = variant === "dark" ? logoDark : logoLight;
  return (
    <img src={src} alt="U-Dental Clinic" className={`h-[54px] sm:h-[62px] lg:h-[80px] w-auto ${className}`} />
  );
}
