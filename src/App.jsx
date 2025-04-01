import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
let [color,setColor] = useState('blue')
  return (
    <div style={{backgroundColor:color}}
     className=" w-full h-screen flex flex-wrap justify-center">
      <div className="bg-gray-300 border-2 w-220 rounded-2xl absolute bottom-10 flex flex-wrap justify-center p-5">
        <button onClick={()=>setColor('red')} className="bg-red-500 px-10">Red</button>
        <button onClick={()=>setColor('green')} className="bg-green-500">Green</button>
        <button onClick={()=>setColor('yellow')} className="bg-yellow-400">Yellow</button>
        <button onClick={()=>setColor('blue')} className="bg-blue-500 px-10">Blue</button>
        <button onClick={()=>setColor('purple')} className="bg-purple-500">Purple</button>
        <button onClick={()=>setColor('cyan')} className="bg-cyan-500">Cyan</button>
        <button onClick={()=>setColor('orange')} className="bg-orange-400 px-10">Orange</button>
        <button onClick={()=>setColor('violet')} className="bg-violet-950 text-white">Violet</button>
        <button onClick={()=>setColor('white')} className="bg-white">White</button>
        <button onClick={()=>setColor('black')} className="bg-black text-white">Black</button>
      </div>
    </div>
  );
}

export default App;
