import { Main } from "@/components/ui/main";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const Recommendations: React.FC = () => {
  return (
    <Main>
      <div className="flex flex-col justify-between space-y-5">
        <div className="items-left justify-between">
          <h1 className="text-2xl font-bold md:text-left ml-20 text-white">
            Recommended for you
          </h1>
        </div>

        <div className="space-y-5 px-4 max-w-5xl ml-12 text-left">
          <div key={1} className="flex items-center bg-gray-700 p-5 rounded-lg">
            <img
              src="src\assets\ab67616d0000b27374216535ac1fbf75fcc2fdb7.jpg"
              alt={`Recommended Song ${1}`}
              className="rounded-lg h-20 w-20"
            />
            <div className="ml-5">
              <h3 className="text-lg text-white">Recommended Song {1}</h3>
              <p className="text-gray-400">
                "Hola Hola" Based on your listening history
              </p>
            </div>
          </div>
          <div key={2} className="flex items-center bg-gray-700 p-5 rounded-lg">
            <img
              src="src\assets\tusa.jpg"
              alt={`Recommended Song ${2}`}
              className="rounded-lg h-20 w-20"
            />
            <div className="ml-5">
              <h3 className="text-lg text-white">Recommended Song {2}</h3>
              <p className="text-gray-400">
                "La Tusa" Based on your listening history
              </p>
            </div>
          </div>
          <div key={3} className="flex items-center bg-gray-700 p-5 rounded-lg">
            <img
              src="src\assets\dd7a1f67790402afaff34e6613ae27c6@300x.jpg"
              alt={`Recommended Song ${3}`}
              className="rounded-lg h-20 w-20"
            />
            <div className="ml-5">
              <h3 className="text-lg text-white">Recommended Song {3}</h3>
              <p className="text-gray-400">
                "Side to side" Based on your listening history
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Recommendations;
