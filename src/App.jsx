import { Contact } from "./component/Contact"
import { Nav } from "./component/Nav"
import { Projects } from "./component/Projects"
import { Tools } from "./component/Tools"
import  {Home}  from "./component/Home"
import { ScrollUpButton } from "./component/ScrollUpButton"
function App() {
  const year = new Date().getFullYear()
  return (<>
    
     <Nav/>
     
     <div className="w-9/10 m-auto">
      <Home/>
      <Tools/>
      <Projects/>
      <Contact/>
    </div>
    <ScrollUpButton />
    <footer className="copyright bg-black p-4 mt-10  text-white text-center">Made With Love By Jihad Mohammed © {year}</footer></>
  )
}

export default App