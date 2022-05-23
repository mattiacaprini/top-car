import React from "react";
import Footer from "../components/footer";
import CardFront from "../components/cardFront";
import CardBack from "../components/cardBack";
import bugatti from "../img/bugatti/bugatti.jpeg";
import ita from "../img/bugatti/ita.png";
import turno from "../img/utility/turno.png";
import AttackList from "../components/attackList";
import Pesca from "../components/pesca";
import Passa from "../components/passa";
import Punteggi from "../components/punteggi";

interface GamePageProps {}
interface GamePageState {}

class GamePage extends React.Component<GamePageProps, GamePageState> {
  constructor(props: GamePageProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="w-full h-1000 flex bg-red-300">
          <div className="h-full w-6/12 border-r-5 border-black bg-yellow-200 ">
            <div className="w-full h-auto flex justify-between pr-8 pl-8 pt-4 bg-amber-500">
              <CardBack></CardBack>
              <img className="bg-red-300 w-20 h-20 " src={turno} />
            </div>
            <div className="bg-amber-700 p-10 flex ">
              <div className="flex flex-col w-1/4 bg-violet-400 ">
                <div className="h-1/3 bg-green-200 flex justify-center items-center ">
                  <Pesca />
                </div>
                <div className="h-1/3 bg-green-400 flex justify-center items-center flex-col ">
                  <p className="font-bold text-center">attacca con</p>
                  <AttackList />
                </div>
                <div className="h-1/3 bg-green-500 flex justify-center items-center">
                  <Passa />
                </div>
              </div>
              <div className="bg-violet-500 w-2/4 flex justify-center ">
                <CardFront
                  peso={1000}
                  cilindrata={3000}
                  cavalli={800}
                  accellerazione={20}
                  rarita={"5a"}
                  nome={"bugatti"}
                  bandiera={ita}
                  img={bugatti}
                />
              </div>
            </div>
            <div className="h-punt bg-teal-500">
              <Punteggi />
            </div>
          </div>

          {/*dvisone due giocatori*/}

          <div className="h-full w-6/12 bg-yellow-200 ">
            <div className="w-full flex justify-between h-auto pl-8 pr-8 pt-4 bg-amber-500 ">
              <img className="bg-red-300 w-20 h-20 " src={turno} />
              <CardBack></CardBack>
            </div>
            <div className="bg-amber-700 flex justify-end p-10">
              <div className="bg-violet-500 w-2/4 flex justify-center ">
                <CardFront
                  peso={1000}
                  cilindrata={3000}
                  cavalli={800}
                  accellerazione={20}
                  rarita={"5a"}
                  nome={"bugatti"}
                  bandiera={ita}
                  img={bugatti}
                />
              </div>
              <div className="flex flex-col w-1/4 bg-violet-400 ">
                <div className="h-1/3 bg-green-200 flex justify-center items-center ">
                  <Pesca />
                </div>
                <div className="h-1/3 bg-green-400 flex justify-center items-center flex-col ">
                  <p className="font-bold text-center">attacca con</p>
                  <AttackList />
                </div>
                <div className="h-1/3 bg-green-500 flex justify-center items-center">
                  <Passa />
                </div>
              </div>
            </div>
            <div className="h-punt bg-teal-200">
              <Punteggi />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default GamePage;
