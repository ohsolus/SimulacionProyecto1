import { Main } from "@/components/ui/main";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const List: React.FC = () => {
  return (
    <Main>
      <div className="flex flex-col justify-between space-y-5">
        <div className="items-left justify-between">
          <h1 className="text-2xl font-bold md:text-left ml-20 text-white">
            Playlists
          </h1>
        </div>

        <div className="flex items-end justify-center">
          <div className="w-full max-w-5xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card
                key="card1"
                className="bg-gray-700 w-full hover:shadow-lg transition-shadow duration-300 border-black"
              >
                <CardContent className="flex flex-col justify-start">
                  <div className="">
                    <Card
                      key="card1"
                      className="bg-gray-700 hover:shadow-lg mt-3 transition-shadow border-black"
                    >
                      {" "}
                      <img
                        src="src\assets\Aesthetic-Neon-Wallpaper.png"
                        alt="Sede Atlántico"
                        className="w-full h-full object-cover rounded"
                      />
                    </Card>
                  </div>

                  <div className="space-y-1 justify-start ">
                    <p className="text-center text-lg text-white font-bold">
                      City Pop
                    </p>
                    <div className="flex flex-row space-x-7 items-align justify-between text-gray-400 ml-3">
                      <span>Nicky Matsubara, Summer...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                key="card1"
                className="bg-gray-700 w-full hover:shadow-lg transition-shadow duration-300 border-black"
              >
                <CardContent className="flex flex-col justify-start">
                  <div className="">
                    <Card
                      key="card1"
                      className="bg-gray-700 hover:shadow-lg mt-3 transition-shadow border-black"
                    >
                      {" "}
                      <img
                        src="src\assets\1595914254_657046_1595914300_noticia_normal.jpg"
                        alt="Sede Atlántico"
                        className="w-full h-full object-cover rounded"
                      />
                    </Card>
                  </div>

                  <div className="space-y-1 justify-start ">
                    <a
                      className="text-center text-lg text-white font-bold"
                      href="/"
                    >
                      Kpop
                    </a>
                    <div className="flex flex-row space-x-7 items-align justify-between text-gray-400 ml-3">
                      <span>BTS, Blackpink, Astro...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                key="card1"
                className="bg-gray-700 w-full hover:shadow-lg transition-shadow duration-300 border-black"
              >
                <CardContent className="flex flex-col justify-start">
                  <div className="">
                    <Card
                      key="card1"
                      className="bg-gray-700 hover:shadow-lg mt-3 transition-shadow border-black"
                    >
                      {" "}
                      <img
                        src="src\assets\mqdefault.jpg"
                        alt="Sede Atlántico"
                        className="w-full h-full object-cover rounded"
                      />
                    </Card>
                  </div>

                  <div className="space-y-1 justify-start ">
                    <p className="text-center text-lg text-white font-bold">
                      J-Rock
                    </p>
                    <div className="flex flex-row space-x-7 items-align justify-between text-gray-400 ml-3">
                      <span>BabyMetal, StereoPhony, OrangeRange...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                key="card1"
                className="bg-gray-700 w-full hover:shadow-lg transition-shadow duration-300 border-black"
              >
                <CardContent className="flex flex-col justify-start">
                  <div className="">
                    <Card
                      key="card1"
                      className="bg-gray-700 hover:shadow-lg mt-3 transition-shadow border-black"
                    >
                      {" "}
                      <img
                        src="src\assets\thumbbig-361284.webp"
                        alt="Sede Atlántico"
                        className="w-full h-full object-cover rounded"
                      />
                    </Card>
                  </div>

                  <div className="space-y-1 justify-start ">
                    <p className="text-center text-lg text-white font-bold">
                      Un verano sin ti
                    </p>
                    <div className="flex flex-row space-x-7 items-align justify-between text-gray-400 ml-3">
                      <span>Bad Bunny, BombaStereo, La Rosalía...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default List;
