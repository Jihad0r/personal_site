import { FaCode } from "react-icons/fa6";
import { TextEffect, TextHover } from "./effects/TextEffect";
import { AiOutlineClose } from "react-icons/ai"; 
import { useMenuStore } from "./useMenuStore";

export const Nav = () => {
  const { menuOpen,toggleMenu } = useMenuStore()
  return (
    <div
  className="p-2 shadow-sm z-3 "
  style={{
    background:
      "linear-gradient(to right, oklch(0.93 0.03 255.59 / .2) 0%, oklch(0.95 0.03 307.17 / .2) 100%)",
  }}
>
  <div className="flex justify-between w-9/10 m-auto items-center">
    <TextEffect text={"Jihad"} size={"text-2xl"} />
    <FaCode className="text-2xl font-bold" />
    <div className="">
      <p className="block md:hidden z-3" onClick={toggleMenu}>{"{...}"}</p>
      <ul
        className={`flex ${menuOpen ? "block" : "hidden md:flex"} flex-col p-2 w-full rounded-xl backdrop-blur-md absolute bottom-0 top-0 right-0 left-0 md:bg-transparent md:p-0 md:flex-row md:relative md:w-[65%] z-10`}
      >
       < AiOutlineClose className={`text-1xl ${menuOpen?"block":"hidden"}`} onClick={toggleMenu} />
        <TextHover text={"Home"} />
        <TextHover text={"Tools"}  />
        <TextHover text={"Projects"} />
        <TextHover text={"Contact"}  />
      </ul>
    </div>
  </div>
</div>
  )
}