import img from "../assets/programming.png"
import { TextEffect } from "./effects/TextEffect"
export const Home = () => {
  return (
    <div className='flex items-center justify-around mb-[1rem] h-96 mt-10' id="Home">
      <div className="w-full md:w-1/2">
        <TextEffect text={"Jihad Orabi"}  size={"text-4xl  md:text-5xl"}/>
        <TextEffect text={"Front end Developer"}  size={"text-3xl  md:text-4xl"}/>
        <p className=" mt-10 mb-10">Jihad is a Front-End Developer passionate about building dynamic, responsive web applications. With expertise in HTML, CSS, JavaScript (ES6), and React, Jihad enjoys optimizing UI performance, integrating APIs, and creating seamless user experiences. Always eager to learn, Jihad thrives in collaborative development environments.</p>
        <a 
          href="https://drive.google.com/uc?export=download&id=1mHh1-4Q592IUau9HcXCsdfYJZqcfnZ9d" 
          download 
          className="px-4 py-2  bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <button className="">Download CV</button>
        </a>
      </div>
      <img className='hidden md:block w-1/3' src={img} alt="responsive" />
      <div class="absolute top-0 opacity-50  w-full -z-1 h-[75vh]  md:h-3/4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div class="absolute inset-0 bg-dot-pattern opacity-30 z-1"></div></div>
    </div>
  )
}
