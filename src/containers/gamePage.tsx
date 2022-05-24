import React from "react";
import CardFront from "../components/cardFront";
import CardBack from "../components/cardBack";
import turno from "../img/utility/turno.png";
import AttackList from "../components/attackList";
import Pesca from "../components/pesca";
import Passa from "../components/passa";
import Punteggi from "../components/punteggi";
import cars from "../assets/cars.json";

interface GamePageProps {}
interface GamePageState {
  car1: any;
  car2: any;
  counterCard1: number;
  counterCard2: number;
  arr1: any;
  arr2: any;
  numApp: number;
  btn1Pass: boolean;
  btn2Pass: boolean;
  btn1Pesc: boolean;
  btn2Pesc: boolean;
}

class GamePage extends React.Component<GamePageProps, GamePageState> {
  cars: any;
  constructor(props: GamePageProps) {
    super(props);
    this.state = {
      car1: [],
      car2: [],
      counterCard1: 15,
      counterCard2: 15,
      arr1: cars.slice(0, 15),
      arr2: cars.slice(15, 30),
      numApp: 0,
      btn1Pass: true,
      btn2Pass: true,
      btn1Pesc: true,
      btn2Pesc: true,
    };
  }

  pesca1() {
    if (this.state.counterCard1 !== 0) {
      let random1 = Math.round(
        (Math.random() * this.state.arr1.length) / 2 - 1
      );
      let car1 = this.state.arr1.find((car: any, i: any) => i === random1);
      this.setState({
        arr1: this.state.arr1.filter((car: any, i: any) => i !== random1),
      });
      this.setState({ car1: car1 });
      this.setState({ counterCard1: this.state.counterCard1 - 1 });
    } else {
      console.log("sei arrivato al alimite");
    }
    this.setState({ btn1Pesc: false, btn2Pass: false, btn2Pesc: false });
  }
  passa1() {
    this.setState({
      btn1Pass: false,
      btn2Pass: true,
      btn2Pesc: true,
      btn1Pesc: false,
    });
  }

  pesca2() {
    if (this.state.counterCard2 !== 0) {
      let random2 = Math.round(
        (Math.random() * this.state.arr2.length) / 2 - 1
      );
      let car2 = this.state.arr2.find((car: any, i: any) => i === random2);
      this.setState({
        arr2: this.state.arr2.filter((car: any, i: any) => i !== random2),
      });

      this.setState({ car2: car2 });

      this.setState({ counterCard1: this.state.counterCard2 - 1 });
    } else {
      console.log("sei arrivato al alimite");
    }
    this.setState({ btn2Pesc: false, btn1Pass: false, btn1Pesc: false });
  }
  passa2() {
    this.setState({
      btn2Pass: false,
      btn1Pass: true,
      btn1Pesc: true,
      btn2Pesc: false,
    });
  }

  render() {
    console.log(cars);

    return (
      <>
        <div className="w-full h-1000 bg-backCard flex">
          {/*bg-red-300*/}
          <div className="h-full w-6/12 border-r-5 border-black">
            {/*bg-yellow-200 */}
            <div className="w-full h-auto flex justify-between pr-8 pl-8 pb-4 pt-4">
              <CardBack></CardBack>
              {this.state.btn1Pass && (
                <img className="w-20 h-20 " src={turno} />
              )}
              {/*bg-red-300 */}
            </div>
            <div className="bg-frontCard p-10 flex ">
              <div className="flex flex-col w-1/4 ">
                {/*bg-violet-400 */}
                <div
                  onClick={() => this.pesca1()}
                  className="h-1/3 flex justify-center items-center "
                >
                  {/*bg-green-200  */}
                  {this.state.btn1Pesc && <Pesca />}
                </div>
                <div className="h-1/3 flex justify-center items-center flex-col ">
                  {/*bg-green-400 */}
                  {this.state.btn1Pass && (
                    <>
                      <p className="font-bold text-white text-center">
                        attacca con
                      </p>
                      <AttackList />
                    </>
                  )}
                </div>
                <div
                  onClick={() => this.passa1()}
                  className="h-1/3 flex justify-center items-center"
                >
                  {/*bg-green-500 */}
                  {this.state.btn1Pass && <Passa />}
                </div>
              </div>

              <div className="w-2/4 flex justify-center ">
                {/*bg-violet-500*/}
                <CardFront
                  peso={this.state.car1.peso}
                  cilindrata={this.state.car1.cilindrata}
                  cavalli={this.state.car1.cavalli}
                  accellerazione={this.state.car1.accellerazione}
                  rarita={this.state.car1.rarita}
                  nome={this.state.car1.nome}
                  bandiera={this.state.car1.bandiera}
                  img={this.state.car1.img}
                />
              </div>
            </div>
            <div className="h-punt">
              {" "}
              {/*bg-teal-500*/}
              <Punteggi />
            </div>
          </div>
          {/*dvisone due giocatori*/}
          <div className="h-full w-6/12 ">
            <div className="w-full flex bg-backCard justify-between h-auto pl-8 pb-4 pr-8 pt-4">
              <div className=" w-20 h-20">
                {this.state.btn2Pass && (
                  <img className=" w-20 h-20 " src={turno} />
                )}
                {/*bg-red-300 */}
              </div>
              <CardBack></CardBack>
            </div>
            <div className="bg-frontCard flex justify-end p-10">
              <div className=" w-2/4 flex justify-center ">
                {" "}
                {/*bg-violet-500 */}
                <CardFront
                  peso={this.state.car2.peso}
                  cilindrata={this.state.car2.cilindrata}
                  cavalli={this.state.car2.cavalli}
                  accellerazione={this.state.car2.accellerazione}
                  rarita={this.state.car2.rarita}
                  nome={this.state.car2.nome}
                  bandiera={this.state.car2.bandiera}
                  img={this.state.car2.img}
                />
              </div>

              <div className="flex flex-col w-1/4">
                {/*bg-violet-400 */}
                <div
                  onClick={() => this.pesca2()}
                  className="h-1/3  flex justify-center items-center "
                >
                  {/*bg-green-200 */}
                  {this.state.btn2Pesc && <Pesca />}
                </div>
                <div className="h-1/3 flex justify-center items-center flex-col ">
                  {/* bg-green-400 */}
                  {this.state.btn2Pass && (
                    <>
                      <p className="font-bold text-white text-center">
                        attacca con
                      </p>
                      <AttackList />
                    </>
                  )}
                </div>
                <div
                  onClick={() => this.passa2()}
                  className="h-1/3 flex justify-center items-center"
                >
                  {/*bg-green-500 */}
                  {this.state.btn2Pass && <Passa />}
                </div>
              </div>
            </div>
            <div className="h-punt ">
              {/*bg-teal-200*/}
              <Punteggi />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GamePage;
