import { useEffect,useState } from "react";
import {tools} from "./data"
import { TitleEffect } from "./effects/TextEffect";

const slideCount = tools.length;
export const Tools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction;

        if (newIndex >= slideCount - 3) {
          setDirection(-1)
        } else if (newIndex <= 0) {
          setDirection(1);
        }

        return newIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [direction, isPaused]);

  return (
    <div className="h-96 mt-10 ">
         <p className='text-center m-auto mb-10'><TitleEffect text={"Tools"}  size={"text-5xl"}/></p>
    <div
      className="relative mx-auto flex items-center justify-around mb-[1rem] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)} 
      id="Tools"
    >
    <div
        className={`flex hover:translateX-[${currentIndex * 35}%] transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 33.2}%)` }}
      > 
      {tools.map((tool, index) => (
        <div
        key={index}
        className="icon flex-shrink-0 mr-4 pb-5 pt-5 w-[32%] h-60 text-center rounded-lg shadow-md bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
      >
      
          <img src={tool.icon} alt={tool.name} className="w-35 h-35 mx-auto opacity-90" />
          <p className="mt-3 text-lg font-semibold">{tool.name}</p>
        </div>
      ))}
    </div>
  </div></div>
  )
}