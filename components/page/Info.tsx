import Image from "next/image";

export default function Info() {
  return (
    <section className="relative w-full h-dvh flex items-center justify-center bg-linear-to-b from-transparent via-background/70 to-background px-50">
      <div className="h-full w-full flex flex-col items-start justify-center gap-3">
        <div className="bg-background py-5 px-2 flex justify-center items-center rounded-3xl shadow-md">
          <Image
            src="/svg/AM.svg"
            alt="Info Image"
            width={800}
            height={600}
            className="w-20"
          />
        </div>
        <h2 className="text-2xl font-bold tracking-widest uppercase leading-tight">
        Andres Martinez <br />
          Desarrollos modernos y <br />
          adaptables
        </h2>
        <p
          className="text-lg"
          style={{
            background: "linear-gradient(90deg, #000 25%, #fff 50%, #000 75%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 6.5s linear infinite",
          }}
        >
          Tu lo pides, yo lo creo
        </p>
      </div>
      <div className="h-full w-full "></div>
    </section>
  );
}
