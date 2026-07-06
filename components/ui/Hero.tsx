import Image from "next/image";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  label?: string;
  align?: "center" | "left";
}

export function Hero({
  image,
  title,
  subtitle,
  label,
  align = "center",
}: HeroProps) {
  const aligned = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-[85vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
      <div className={`relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-32 md:px-8 md:pb-24 ${aligned}`}>
        {label && (
          <p className="font-utility mb-4 text-[10px] text-text-on-photo-warm/80">{label}</p>
        )}
        <h1 className="font-display text-5xl leading-tight text-text-on-photo-warm md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="font-script -mt-2 text-3xl text-lemon md:text-4xl lg:text-5xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
