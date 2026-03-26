'use client";'

import { Mail } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="bg-white z-20 w-full h-12 fixed top-0 flex flex-wrap justify-between items-center py-1 px-50">
      <div className="text-lg font-bold flex flex-wrap items-center">
        <Image src="/svg/AM.svg" alt="My App" className="h-14 w-14 mr-2" width={32} height={32} />
        <h1>AM Developer</h1>
      </div>
      <div className="">
        <Button backgroundColor="bg-black" colorType="dark">
          Contactame
        </Button>
      </div>
    </nav>
  );
}
