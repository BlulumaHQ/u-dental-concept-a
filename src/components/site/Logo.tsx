type Props = { variant?: "dark" | "light"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const main = variant === "dark" ? "text-charcoal" : "text-white";
  const accent = "text-primary";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className={`h-9 w-9 ${accent}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4c5 0 9 3.6 9 8.4v9.2c0 7.5-4 14.4-9 14.4s-9-6.9-9-14.4V12.4C11 7.6 15 4 20 4z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 4v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold text-[1.35rem] tracking-tight ${main}`}>
          U-Dental
        </span>
        <span className={`text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${variant === "dark" ? "text-muted-foreground" : "text-white/70"}`}>
          Clinic · Vancouver
        </span>
      </div>
    </div>
  );
}
