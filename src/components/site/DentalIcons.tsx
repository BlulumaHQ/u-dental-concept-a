import type { SVGProps, ReactElement } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size ?? 56,
  height: props.size ?? 56,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

// Master tooth path — fills viewBox from ~4 to ~44, used as base for many icons
const TOOTH_D =
  "M14 5C9 5 5 9 5 14c0 5 2 8 3 13 1 6 2 16 5 16 3 0 3-7 4-11 0-3 5-3 5 0 1 4 1 11 4 11 3 0 4-10 5-16 1-5 3-8 3-13 0-5-4-9-9-9-3 0-5 2-8 2s-5-2-8-2Z";

const Tooth = () => <path d={TOOTH_D} />;

export const ToothIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
  </svg>
);

// 1. Dental implant — tooth crown sitting atop a threaded screw
export const ImplantIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 4C9 4 6 7 6 12c0 4 2 6 3 10 1 3 1 7 3 7 1.5 0 1.5-3 2-5 .5-2 3-2 3.5 0 .5 2 .5 5 2 5 2 0 2-4 3-7 1-4 3-6 3-10 0-5-3-8-8-8-2 0-3 1-5 1s-3-1-5-1Z" />
    <path d="M14 26h16" />
    <path d="M16 30h12M17 34h10M18 38h8M19 42h6" />
    <path d="M24 42v2" />
  </svg>
);

// 2. All-on-4 — jaw arch with four implants
export const AllOnFourIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 16C8 9 15 5 24 5s16 4 19 11c1.5 3.5-.5 7-3 7-2 0-2.5-2-2.5-4 0-2.5-2-4-4-4s-4 1.5-4 4c0 2-1 4-2.5 4S25 22 25 20c0-2.5-2-4-4-4s-4 1.5-4 4c0 2-.5 4-2.5 4S12 22 12 20c0-2.5-2-4-4-4S5 19.5 5 16Z" />
    <path d="M9 30v6M9 38v4M19 30v6M19 38v4M29 30v6M29 38v4M39 30v6M39 38v4" />
  </svg>
);

// 3. Invisalign — tooth wrapped by clear aligner shell
export const AlignerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <path
      d="M9 12c0-3 3-5 6-5 2 0 3 1 5 1 1.5 0 3-1 5-1 3 0 6 2 6 5"
      transform="translate(3 1)"
    />
  </svg>
);

// 4. Orthodontics — tooth with bracket + arch wire
export const BracesIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <path d="M3 24h42" />
    <rect x="9" y="21" width="6" height="6" rx="1" />
    <rect x="21" y="21" width="6" height="6" rx="1" />
    <rect x="33" y="21" width="6" height="6" rx="1" />
  </svg>
);

// 5. X-Guide — crosshair targeting on tooth
export const XGuideIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <circle cx="24" cy="24" r="9" />
    <path d="M24 11v5M24 32v5M11 24h5M32 24h5" />
    <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
  </svg>
);

// 6. Oral surgery — tooth + scalpel
export const ScalpelIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 10C6 10 3 13 3 18c0 4 2 6 3 10 1 3 1 7 3 7 1.5 0 1.5-3 2-5 .5-2 3-2 3.5 0 .5 2 .5 5 2 5 2 0 2-4 3-7 1-4 3-6 3-10 0-5-3-8-8-8-2 0-3 1-5 1s-3-1-5-1Z" />
    <path d="M30 4l14 14-5 5-12-12z" />
    <path d="M27 11l10 10" />
  </svg>
);

// 7. Wisdom tooth — molar with extraction arrow
export const WisdomToothIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 8C7 8 5 11 5 14c0 3 1 5 2 9 1 4 0 14 4 14 2 0 2-5 3-8 .5-2 2-2 2 0 0 2 1 6 3 6s3-4 3-6c0-2 1.5-2 2 0 1 3 1 8 3 8 4 0 3-10 4-14 1-4 2-6 2-9 0-3-2-6-5-6-2 0-3 1-5 1s-3-1-5-1-2 1-5 1-2-1-3-1Z" />
    <path d="M34 18h10M44 18l-4-4M44 18l-4 4" />
  </svg>
);

// 8. Cosmetic — tooth with sparkle stars
export const SparkleToothIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <path
      d="M37 6l1.5 4 4 1.5-4 1.5L37 17l-1.5-4-4-1.5 4-1.5z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M41 22l1 2.5 2.5 1-2.5 1L41 29l-1-2.5-2.5-1 2.5-1z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// 9. Cleaning — toothbrush
export const CleaningIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M30 4l14 14-4 4-14-14z" />
    <path d="M26 8l4-4M22 12l4-4M18 16l4-4" />
    <path d="M26 8l14 14" opacity="0.4" />
    <rect
      x="2"
      y="20"
      width="22"
      height="10"
      rx="3"
      transform="rotate(-45 13 25)"
    />
    <path d="M26 24l-14 14" />
  </svg>
);

// 10. Emergency — tooth with red-cross badge
export const EmergencyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <circle cx="36" cy="12" r="7" fill="hsl(var(--background))" />
    <path d="M36 8v8M32 12h8" strokeWidth="2.6" />
  </svg>
);

// 11. Restoration — tooth with composite filling shape
export const RestorationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <path
      d="M16 16c2-2 4 1 8 1s6-3 8-1c2 2 1 7-1 9-2 2-4-1-7-1s-5 3-7 1c-2-2-3-7-1-9Z"
      fill="currentColor"
      fillOpacity="0.22"
    />
  </svg>
);

// 12. Crown & bridges — tooth wearing royal crown
export const CrownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 17C9 17 5 21 5 26c0 5 2 8 3 13 1 6 2 6 4 6 2 0 2-7 3-11 0-3 5-3 5 0 1 4 1 11 3 11 2 0 3 0 4-6 1-5 3-8 3-13 0-5-4-9-9-9-2 0-3 1-5 1s-3-1-5-1Z" />
    <path d="M3 16l5-10 6 6 5-9 5 9 6-6 5 10z" fill="currentColor" fillOpacity="0.15" />
    <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="19" cy="3" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="30" cy="6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// 13. Root canal — tooth with prominent root channels
export const RootCanalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <path
      d="M16 16c0 6 1 14 2 22M32 16c0 6-1 14-2 22"
      strokeWidth="1.6"
      opacity="0.7"
    />
    <path d="M20 14c0 4 1 12 2 20M28 14c0 4-1 12-2 20" />
  </svg>
);

// 14. Denture — full smile arch with row of teeth
export const DentureIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 18C6 12 13 8 24 8s18 4 21 10c1.5 3.5-1 8-4 9-2 .5-3-1-3-3 0-2-1.5-3.5-3.5-3.5S31 22 31 24s-1.5 3.5-3.5 3.5S24 26 24 24s-1.5-3.5-3.5-3.5S17 22 17 24s-1.5 3.5-3.5 3.5S10 26 10 24s-1.5-3.5-3.5-3.5C4.5 20.5 3.5 22 3.5 24c0 2-1 3.5-3 3 0 0-2-3 2.5-9Z" />
    <path d="M8 30c3 6 9 10 16 10s13-4 16-10" />
  </svg>
);

// 15. Microscopic dentistry
export const MicroscopeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 4l16 16-5 5-16-16z" />
    <path d="M18 12l16 16" />
    <path d="M14 30l4-4 8 8-4 4z" />
    <path d="M8 42h32" />
    <path d="M16 42c0-8 6-14 14-14" />
    <circle cx="38" cy="22" r="3" />
  </svg>
);

// 16. Bioclear — tooth with shine accent
export const BioclearIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <Tooth />
    <path
      d="M14 12c0 6 0 14-2 24M19 11c0 7 0 16-3 27"
      opacity="0.55"
      strokeWidth="1.8"
    />
    <path
      d="M37 6l1.5 4 4 1.5-4 1.5L37 17l-1.5-4-4-1.5 4-1.5z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// 17. Galvosurge — implant with energy waves
export const GalvosurgeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 4C6 4 3 7 3 12c0 4 2 6 3 10 1 3 1 7 3 7 1.5 0 1.5-3 2-5 .5-2 3-2 3.5 0 .5 2 .5 5 2 5 2 0 2-4 3-7 1-4 3-6 3-10 0-5-3-8-8-8-2 0-3 1-5 1s-3-1-5-1Z" />
    <path d="M10 26h12M11 30h10M12 34h8M13 38h6" />
    <path d="M28 14c3 1.5 4.5 4 4.5 7s-1.5 5.5-4.5 7M34 9c5 2.5 7.5 6.5 7.5 12s-2.5 9.5-7.5 12" />
  </svg>
);

// 18. Botox — syringe
export const BotoxIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M30 4l14 14M28 6l14 14" />
    <path d="M22 12l14 14-12 12-14-14z" />
    <path d="M14 26l-2 2M18 30l-2 2M22 34l-2 2" />
    <path d="M10 30l-6 6M4 36l4 4" />
  </svg>
);

export type DentalIconComponent = (p: IconProps) => ReactElement;

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
