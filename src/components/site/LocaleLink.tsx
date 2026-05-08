import { Link } from "@tanstack/react-router";
import { useLocale, localePath } from "@/lib/i18n";

type Props = {
  to: string;
  params?: Record<string, string>;
  className?: string;
  activeProps?: { className?: string };
  activeOptions?: { exact?: boolean };
  onClick?: () => void;
  children?: React.ReactNode;
  "aria-label"?: string;
};

/** Locale-aware Link that auto-prepends /zh-hant when in Chinese locale. */
export function LocaleLink(props: Props) {
  const locale = useLocale();
  const to = localePath(props.to, locale);
  // Cast to any: we compute paths dynamically; TanStack's strict route literal
  // typing cannot infer this.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Link {...(props as any)} to={to as any} />;
}
