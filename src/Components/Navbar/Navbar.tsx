import React from "react";
import Image from "next/image";
import Link from "next/link";
import { authModalState } from "@/atoms/authModalAtom";
import { useRecoilCallback, useRecoilState, useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModelState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModelState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between py-2 sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <Image
          src="/logo-full.png"
          alt="CodeRight"
          className="h-full"
          width={250}
          height={18}
          style={{ borderRadius: "50px" }}
        />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
         border-2 border-transparent transition duration-300 ease-in-out"
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
