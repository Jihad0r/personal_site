import { useMenuStore } from "../useMenuStore";

export const TextEffect = ({text,size}) => {
  return (
    <div className={`flex items-center w-fit ${size} font-bold `}>
      <span className=''>{"{"}</span>
      <span className="animate-text">{text}</span>
      <span className=''>{"/}"}</span>
    </div>
  );
};

export const TitleEffect = ({text,size}) => {
  return (
    <div className={`title flex items-center justify-center ${size} font-bold `}>
      <span className=''>{"{"}</span>
      <span className="title opacity-0 hidden">{text}</span>
      <span className=''>{"/}"}</span>
    </div>
  );
};

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const TextHover = ({text}) => {
  const {toggleMenu} = useMenuStore()
  return (
    <div  onClick={() => { scrollToSection(text); toggleMenu();}} className="texthoverd flex items-center w-fit font-bold ml-4 mr-3 p-2 cursor-pointer text-1xl md:text-sm md:ml-0 md:p-0 ">
      <span className='hidden'>{"{"}</span>
      <li className="">{text}</li>
      <span className='hidden'>{"}"}</span>
    </div>
  );
};