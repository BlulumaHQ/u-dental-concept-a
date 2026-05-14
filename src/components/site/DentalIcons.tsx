import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size ?? 36,
  height: props.size ?? 36,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

// Standard tooth outline reused across icons
const Tooth = (extra = "") => (
  <path d={`M16 7c-3.5 0-6 2.6-6 6.2 0 3 1.2 4.6 1.9 7.4.7 2.8.6 5.6 1.6 9.2.7 2.6 1.4 6 2.7 8.6.9 1.8 2.6 1.8 3.3 0 1-2.5 1.4-6.5 2.5-9 .8-1.8 2-1.8 2.8 0 1.1 2.5 1.5 6.5 2.5 9 .7 1.8 2.4 1.8 3.3 0 1.3-2.6 2-6 2.7-8.6 1-3.6.9-6.4 1.6-9.2.7-2.8 1.9-4.4 1.9-7.4C36.9 9.6 34.4 7 30.9 7c-2.6 0-4 1.3-6.9 1.3S18.6 7 16 7Z${extra}`} />
);

export const ToothIcon = (p: IconProps) => (
  <svg {...base(p)}>{Tooth()}</svg>
);

export const ImplantIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 6c-3 0-5 2-5 5 0 2.4 1 3.7 1.5 6 .5 2.3.5 4 1.2 4 .7 0 .8-1.2 1.2-3 .4-1.6 1-1.6 1.4 0 .4 1.8.5 3 1.2 3 .7 0 .7-1.7 1.2-4 .5-2.3 1.5-3.6 1.5-6 0-3-2-5-5-5-.6 0-.9.3-1.6.6-.7-.3-1-.6-1.6-.6Z" transform="translate(5 0)" />
    <path d="M21 26h6M22 30h4M22.5 34h3M23 38v4" />
    <path d="M20 22l8 0" />
  </svg>
);

export const AllOnFourIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 18c2-7 8-10 16-10s14 3 16 10c1 4-1 8-4 9-2 .8-3-1-3-3 0-2-1-3-3-3-1.5 0-2.5 1-3 3-.5 2-1.5 3-3 3s-2.5-1-3-3c-.5-2-1.5-3-3-3-2 0-3 1-3 3 0 2-1 3.8-3 3-3-1-5-5-4-9Z" />
    <circle cx="16" cy="32" r="2" />
    <circle cx="20.5" cy="34" r="2" />
    <circle cx="27.5" cy="34" r="2" />
    <circle cx="32" cy="32" r="2" />
    <path d="M16 34v6M20.5 36v6M27.5 36v6M32 34v6" />
  </svg>
);

export const AlignerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 14c0-4 3-7 14-7s14 3 14 7-2 8-3 12-1 9-4 11c-2 1-3-1-3-4 0-3-1-4-4-4s-4 1-4 4c0 3-1 5-3 4-3-2-3-7-4-11s-3-8-3-12Z" />
    <path d="M13 16c0-2 4-4 11-4s11 2 11 4-2 6-3 9c-1.5-2-4-3-8-3s-6.5 1-8 3c-1-3-3-7-3-9Z" opacity="0.55" />
  </svg>
);

export const BracesIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M11 22h26" />
    <rect x="14" y="20" width="4" height="4" rx="0.5" />
    <rect x="22" y="20" width="4" height="4" rx="0.5" />
    <rect x="30" y="20" width="4" height="4" rx="0.5" />
  </svg>
);

export const XGuideIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <circle cx="24" cy="24" r="7" />
    <path d="M24 14v4M24 30v4M14 24h4M30 24h4" />
    <circle cx="24" cy="24" r="1.5" />
  </svg>
);

export const ScalpelIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M30 6l10 10-6 4-8-8z" />
    <path d="M26 12l8 8" />
  </svg>
);

export const WisdomToothIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 10c0-3 3-5 6-5 2 0 3 1 6 1s4-1 6-1c3 0 6 2 6 5 0 4-1 5-2 9-1 4-1 11-3 16-1.5 4-4 4-5 0-.6-2.4-1-6-2-6s-1.4 3.6-2 6c-1 4-3.5 4-5 0-2-5-2-12-3-16-1-4-2-5-2-9Z" />
    <path d="M18 26h12" opacity="0.5" />
    <path d="M40 22l4-2M42 26h4M40 30l4 2" />
  </svg>
);

export const SparkleToothIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M37 8l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="currentColor" stroke="none" />
    <path d="M40 18l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" fill="currentColor" stroke="none" />
  </svg>
);

export const CleaningIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M34 6l8 8-10 10-4 1 1-4z" />
    <path d="M30 14l4 4" />
    <path d="M27 23l3 3" />
  </svg>
);

export const EmergencyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M24 18v8M24 30v.5" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const RestorationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M19 18c2 0 3 2 5 2s3-2 5-2 3 2 3 5-1 5-3 6-3-1-5-1-3 1-5 1-3-3-3-6 1-5 3-5Z" fill="currentColor" fillOpacity="0.18" />
  </svg>
);

export const CrownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M12 16l3-7 4 4 5-6 5 6 4-4 3 7z" fill="currentColor" fillOpacity="0.15" />
    <circle cx="15" cy="9" r="1" />
    <circle cx="24" cy="6" r="1" />
    <circle cx="33" cy="9" r="1" />
  </svg>
);

export const RootCanalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M20 16c0 4 1 10 2 18M28 16c0 4-1 10-2 18" stroke="currentColor" strokeWidth="1.2" />
    <path d="M22 14c0 2 .5 6 1 12M26 14c0 2-.5 6-1 12" opacity="0.6" />
  </svg>
);

export const DentureIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 18c2-4 8-6 18-6s16 2 18 6c1 3-1 6-3 7-1.5.7-2.5-.5-2.5-2 0-1.5-1-2.5-2.5-2.5s-2.5 1-3 2.5-1 2.5-2.5 2.5-2.5-1-3-2.5-1.5-2.5-3-2.5-2.5 1-2.5 2.5c0 1.5-1 2.7-2.5 2C7 24 5 21 6 18Z" />
    <path d="M9 28c2 4 7 7 15 7s13-3 15-7" opacity="0.55" />
    <path d="M14 22v6M20 24v7M28 24v7M34 22v6" />
  </svg>
);

export const MicroscopeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 6l8 8-4 4-8-8z" />
    <path d="M18 14l8 8" />
    <path d="M14 26l4-4 6 6-4 4z" />
    <path d="M16 34h22" />
    <path d="M22 34c0-6 4-10 10-10" />
    <circle cx="34" cy="22" r="2" />
  </svg>
);

export const BioclearIcon = (p: IconProps) => (
  <svg {...base(p)}>
    {Tooth()}
    <path d="M19 16c2 4 2 10 0 16M22 14c1.5 5 1.5 12 0 18" opacity="0.55" />
    <path d="M34 10l1.5 3 3 1.5-3 1.5L34 19l-1.5-3-3-1.5 3-1.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const GalvosurgeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19 8c-3 0-5 2-5 5 0 2.4 1 3.6 1.5 6 .5 2.3.5 4 1.2 4 .7 0 .8-1.2 1.2-3 .4-1.6 1-1.6 1.4 0 .4 1.8.5 3 1.2 3 .7 0 .7-1.7 1.2-4 .5-2.4 1.5-3.6 1.5-6 0-3-2-5-5-5Z" />
    <path d="M19 22v6M19 30v4M19 36v4" />
    <path d="M28 14c2 1 3 3 3 5s-1 4-3 5M32 10c4 2 6 5 6 9s-2 7-6 9" />
  </svg>
);

export const BotoxIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M30 6l12 12-4 4-12-12z" />
    <path d="M28 8l12 12" />
    <path d="M24 14l10 10-8 8-10-10z" />
    <path d="M14 32l-6 6M10 36l4 4" />
    <path d="M22 12l4-4" />
  </svg>
);

export type DentalIconComponent = (p: IconProps) => JSX.Element;

export const DENTAL_ICONS: Record<string, DentalIconComponent> = {
  "dental-implants": ImplantIcon,
  "all-on-4": AllOnFourIcon,
  "invisalign": AlignerIcon,
  "orthodontics": BracesIcon,
  "x-guide-real-time-3d-guidance-surgery": XGuideIcon,
  "oral-surgery": ScalpelIcon,
  "wisdom-tooth-extraction": WisdomToothIcon,
  "cosmetics-and-comprehensive-dentistry": SparkleToothIcon,
  "dental-cleaning": CleaningIcon,
  "emergency": EmergencyIcon,
  "restorations": RestorationIcon,
  "crown-and-bridges": CrownIcon,
  "root-canal-treatment": RootCanalIcon,
  "denture": DentureIcon,
  "microscopic-dentistry": MicroscopeIcon,
  "bioclear": BioclearIcon,
  "galvosurge-for-peri-implantitis-treatment": GalvosurgeIcon,
  "botox": BotoxIcon,
};
