import "../../styles/header.css";

import { useState } from "react";

interface Props {
  labels: string[];
}

export default function NavMobile({ labels }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div className="block tablet:hidden relative w-fit h-fit">
        <img
          onClick={() => setToggle(!toggle)}
          src="/icon/icon-hamburger.svg"
          alt="menu icon"
          width={24}
          height={18}
          className={`hover:cursor-pointer ${
            toggle ? "opacity-75" : "opacity-100"
          }`}
        />
      </div>

      <div
        className={`triangle w-[24px] absolute bg-white right-8 top-[56px] ${
          toggle ? "block tablet:hidden" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute flex flex-col w-menu items-center justify-center gap-4 bg-white p-4 right-8 top-[80px] ${
          toggle ? "block tablet:hidden" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-4 w-fit h-fit">
          {labels.map((label) => (
            <span
              key={label}
              rel="stylesheet"
              className="capitalize text-very-dark-grayish-blue text-base duration-200 ease-linear font-barlow-600 hover:cursor-pointer hover:text-very-dark-desaturated-blue"
            >
              {label}
            </span>
          ))}
        </nav>
        <button className="uppercase text-sm text-very-dark-desaturated-blue bg-yellow hover:opacity-90 py-2 px-4 rounded-3xl font-barlow-600">
          contact
        </button>
      </div>
    </>
  );
}
