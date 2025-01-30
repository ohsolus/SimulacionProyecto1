import { Main } from "@/components/ui/main";
import List from "./pages/List";
import Recommendations from "./pages/Recommendations";
import * as FaIcons from "react-icons/fa";

export function Welcome() {
  return (
    <Main className="bg-cover bg-center h-screen bg-gray-900">
      <div className="flex p-4 justify-center py-7"></div>

      <div className="justify-center flex p-2">
        <div className=""></div>
      </div>
      <List />
      <br></br>
      <Recommendations />
      <br></br>
      <br></br>
      <Footer />
    </Main>
  );
}

const Footer = () => (
  <div className="z-10 fixed bottom-0 left-0 right-0 bg-black flex justify-between items-center">
    <div className="flex items-center">
      <img
        src="https://i.ytimg.com/vi/E81_yTMdZQ8/sddefault.jpg"
        alt="Play It Safe album"
        className="mr-3 h-12 w-12"
      />
      <div>
        <p className="text-white">Play It Safe</p>
        <p className="text-gray-400">Julia Wolf</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <FaIcons.FaRandom size={24} className="text-white" />
      <FaIcons.FaStepBackward size={24} className="text-white" />
      <FaIcons.FaPlayCircle size={24} className="text-white text-2xl" />
      <FaIcons.FaStepForward size={24} className="text-white" />
      <FaIcons.FaRedo size={24} className="text-white" />
    </div>
    <div className="flex items-center space-x-3 mr-5">
      <span className="text-white">2:39</span>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="w-full bg-pink-200"
      />
      <span className="text-white">4:22</span>
      <br></br>

      <FaIcons.FaVolumeUp size={40} className="text-white" />
      <input type="range" min="0" max="100" defaultValue="50" />
    </div>
  </div>
);
