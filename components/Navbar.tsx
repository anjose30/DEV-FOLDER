'use client";';

import { Mail } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="bg-background z-20 w-full h-12 fixed top-0 flex justify-between items-center py-2 px-60 text-sm select-none">
      <div className="text-lg font-bold flex flex-wrap items-center">
        <Image
          src="/svg/AM.svg"
          alt="My App"
          className="h-10 w-10 mr-2"
          width={32}
          height={32}
        />
        <h1 className="font-bold text-md">AM Developer</h1>
      </div>
      <div className="flex items-center justify-center">
        <Button backgroundColor="bg-black" colorType="dark">
          Contactame
        </Button>
      </div>
    </nav>
  );
}
