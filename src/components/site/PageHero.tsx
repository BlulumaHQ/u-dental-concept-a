type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
};

export function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal text-white">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
      <div className="relative container-x py-20 lg:py-28">
        {eyebrow && (
          <p className="text-primary font-bold uppercase text-sm tracking-[0.25em]">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
