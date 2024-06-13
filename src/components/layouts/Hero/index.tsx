import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-64px)]">
      <div className="container size-full flex flex-col lg:flex-row gap-5 lg:gap-20">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-center lg:text-start">
              <Title
                title="Nikmati Tontonan Dimana Saja, dan Kapan Saja"
                className="text-2xl sm:text-5xl lg:text-[56px] sm:leading-[70px] font-bold"
              />
            </h1>
            <p className="sm:w-[640px] lg:w-full text-sm sm:text-lg text-center lg:text-justify text-muted-foreground">
              Tonton apa saja secara online dari komputer pribadi atau di
              perangkat yang terhubung ke Internet dan mendukung aplikasi
              Netflix, dan gunakan download untuk menonton saat kamu di
              perjalanan dan tidak punya koneksi Internet.
            </p>
          </div>

          <div>
            <Button size={"sm"} asChild>
              <Link href="/login">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex lg:items-center justify-center">
          <div className="size-[300px] sm:size-[450px] lg:size-[550px] bg-gradient-to-r from-slate-300 to-slate-500 flex items-center justify-center rounded-full">
            <Image
              src={"/hero.svg"}
              alt=""
              width={380}
              height={380}
              sizes="100%"
              priority
              className="size-[200px] sm:size-[350px] lg:size-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
