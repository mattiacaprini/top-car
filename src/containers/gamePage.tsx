import React from "react";
import CardFront from "../components/cardFront";
import CardBack from "../components/cardBack";
import turno from "../img/utility/turno.png";
import AttackList from "../components/attackList";
import Pesca from "../components/pesca";
import Passa from "../components/passa";
import Punteggi from "../components/punteggi";
import Attacca from "../components/attacca/attacca";
import axios from "axios";

interface GamePageProps {}

enum TipoAttacco {
  PESO,
  CILINDRATA,
  CAVALLI,
  ACCELLERAZIONE,
}
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
  btn1Att: boolean;
  btn2Att: boolean;
  attaccoSelezionato: number;
  attaccoSelezionato2: number;
  tipoAttaccoSelezionato: TipoAttacco;
  mex1: string;
  mex2: string;
  punti1: number;
  punti2: number;
  btn1Card: boolean;
  btn2Card: boolean;
  btn1BackCard: boolean;
  btn2BackCard: boolean;
  btn1Turn: boolean;
  btn2Turn: boolean;
  vincitore: string;
  btnWinner: boolean;
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
      arr1: [],
      arr2: [],
      numApp: 0,
      btn1Pass: false,
      btn2Pass: false,
      btn1Pesc: true,
      btn2Pesc: true,
      attaccoSelezionato: 0,
      attaccoSelezionato2: 0,
      tipoAttaccoSelezionato: TipoAttacco.PESO,
      mex1: "",
      mex2: "",
      punti1: 0,
      punti2: 0,
      btn1Att: false,
      btn2Att: false,
      btn1Card: false,
      btn2Card: false,
      btn1BackCard: true,
      btn2BackCard: true,
      btn1Turn: true,
      btn2Turn: true,
      vincitore: "",
      btnWinner: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/api/cars").then((result: any) => {
      this.setState({
        arr1: result.data.slice(0, 15),
        arr2: result.data.slice(15, 30),
      });
    });
  }

  getSelectedCounterpartValue(car: any): number {
    if (this.state.tipoAttaccoSelezionato === TipoAttacco.CILINDRATA) {
      return car.cilindrata;
    } else if (this.state.tipoAttaccoSelezionato === TipoAttacco.PESO) {
      return car.peso;
    } else if (this.state.tipoAttaccoSelezionato === TipoAttacco.CAVALLI) {
      return car.cavalli;
    } else if (
      this.state.tipoAttaccoSelezionato === TipoAttacco.ACCELLERAZIONE
    ) {
      return car.accellerazione;
    }
    return 0;
  }

  attaccoConfronto1() {
    if (
      this.state.attaccoSelezionato >
      this.getSelectedCounterpartValue(this.state.car2)
    ) {
      this.setState({
        mex1: "VINTO...+ 1 PUNTO",
        punti1: this.state.punti1 + 1,
      });
    } else if (
      this.state.attaccoSelezionato <
      this.getSelectedCounterpartValue(this.state.car2)
    ) {
      this.setState({
        mex1: "PERSO...- 1 PUNTO",
        punti1: this.state.punti1 - 1,
      });
    } else {
      this.setState({ mex1: "PAREGGIO" });
    }

    this.setState({ btn1Att: false, btn1Pesc: false });
  }

  attaccoConfronto2() {
    if (
      this.state.attaccoSelezionato >
      this.getSelectedCounterpartValue(this.state.car1)
    ) {
      this.setState({
        mex2: "VINTO...+ 1 PUNTO",
        punti2: this.state.punti2 + 1,
      });
    } else if (
      this.state.attaccoSelezionato <
      this.getSelectedCounterpartValue(this.state.car1)
    ) {
      this.setState({
        mex2: "PERSO...- 1 PUNTO",
        punti2: this.state.punti2 - 1,
      });
    } else {
      this.setState({ mex2: "PAREGGIO" });
    }

    this.setState({ btn2Att: false, btn2Pesc: false });
  }

  attackSelection(valore: number, label: string) {
    let tipoAttacco: TipoAttacco = TipoAttacco.PESO;

    if (label === "Cilindrata") {
      tipoAttacco = TipoAttacco.CILINDRATA;
    } else if (label === "Peso") {
      tipoAttacco = TipoAttacco.PESO;
    } else if (label === "Cavalli") {
      tipoAttacco = TipoAttacco.CAVALLI;
    } else if (label === "Accellerazione") {
      tipoAttacco = TipoAttacco.ACCELLERAZIONE;
    }

    this.setState({
      attaccoSelezionato: valore,
      tipoAttaccoSelezionato: tipoAttacco,
    });
  }

  attackSelection2(valore: number, label: string) {
    this.setState({
      attaccoSelezionato2: valore,
    });
  }

  pesca1() {
    if (this.state.counterCard1 !== 12) {
      let random1 = Math.round(Math.random() * (this.state.arr1.length - 1));
      let car1 = this.state.arr1.find((car: any, i: any) => i === random1);
      this.setState({
        arr1: this.state.arr1.filter((car: any, i: any) => i !== random1),
      });
      this.setState({
        car1: car1,
        btn1Card: true,
        btn1Pesc: false,
        btn1Att: true,
        btn1Pass: true,
        btn2Pass: false,
        btn2Pesc: false,
        btn2Att: false,
        btn1Turn: true,
        btn2Turn: false,

        counterCard1: this.state.counterCard1 - 1,
      });
      if (this.state.counterCard1 === 13) {
        this.setState({
          btn1BackCard: false,
        });
      }
    } else {
      console.log("sei arrivato al limite");
      this.setState({
        btn1Card: false,
        btn1Att: false,
        btn1Pass: true,
        btn1Pesc: false,
      });
    }
  }
  passa1() {
    if (this.state.btn2BackCard === false) {
      this.setState({
        btn1Pass: false,
        btn1Turn: false,
        btn1Card: false,
        btn1Pesc: false,
        btn1Att: false,

        btn2Pass: false,
        btn2Turn: false,
        btn2Card: false,
        btn2Pesc: false,
        btn2Att: false,

        btnWinner: true,
      });

      if (this.state.punti1 > this.state.punti2) {
        this.setState({
          vincitore: " player_1",
        });
      } else if (this.state.punti1 < this.state.punti2) {
        this.setState({
          vincitore: " player_2",
        });
      } else {
        this.setState({
          vincitore: " pareggio",
        });
      }
    } else {
      this.setState({
        btn1Pass: false,
        btn1Pesc: false,
        btn1Att: false,
        btn2Pass: false,
        btn2Pesc: true,
        btn2Att: false,
        btn1Turn: false,
        btn1Card: true,
      });
    }
  }
  //usare arr2.length invece che i counter
  pesca2() {
    if (this.state.counterCard2 !== 12) {
      let random2 = Math.round(Math.random() * (this.state.arr2.length - 1));
      let car2 = this.state.arr2.find((car: any, i: any) => i === random2);
      this.setState({
        arr2: this.state.arr2.filter((car: any, i: any) => i !== random2),
      });

      this.setState({
        car2: car2,
        btn2Pesc: false,
        btn1Pass: false,
        btn1Pesc: false,
        btn1Att: false,
        btn2Att: true,
        btn2Pass: true,
        btn2Card: true,
        btn2Turn: true,
        btn1Turn: false,

        counterCard2: this.state.counterCard2 - 1,
      });

      if (this.state.counterCard2 === 13) {
        this.setState({
          btn2BackCard: false,
        });
      }
    } else {
      console.log("sei arrivato al limite");
      this.setState({
        btn2Card: false,
        btn2Att: false,
        btn2Pass: true,
        btn2Pesc: false,
      });
    }
  }
  passa2() {
    if (this.state.btn1BackCard === false) {
      this.setState({
        btn2Pass: false,
        btn2Turn: false,
        btn2Card: false,
        btn2Pesc: false,
        btn2Att: false,

        btn1Pass: false,
        btn1Turn: false,
        btn1Card: false,
        btn1Pesc: false,
        btn1Att: false,

        btnWinner: true,
      });

      if (this.state.punti2 > this.state.punti1) {
        this.setState({
          vincitore: " player_2",
        });
      } else if (this.state.punti2 < this.state.punti1) {
        this.setState({
          vincitore: " player_1",
        });
      } else {
        this.setState({
          vincitore: " pareggio",
        });
      }
    } else {
      this.setState({
        btn1Pass: false,
        btn1Pesc: true,
        btn1Att: false,
        btn2Pass: false,
        btn2Pesc: false,
        btn2Att: false,
        btn2Turn: false,
        btn1Turn: true,
      });
    }
  }

  render() {
    return (
      <>
        <div className="w-full h-1000 bg-backCard flex">
          {/*bg-red-300*/}
          <div className="h-full w-6/12 border-r-5 border-black">
            {/*bg-yellow-200 */}
            <div className="w-full h-auto flex justify-between pr-8 pl-8 pb-4 pt-4">
              <CardBack scomparsa={this.state.btn1BackCard} />

              {this.state.btn1Turn && (
                <img className="w-20 h-20 " src={turno} alt="" />
              )}
              {/*bg-red-300 */}
            </div>
            <div className="bg-frontCard p-10 flex ">
              <div className="flex flex-col w-1/4 ">
                {/*bg-violet-400 */}
                <div className="h-1/3 flex justify-center items-center ">
                  {/*bg-green-200  */}
                  {this.state.btn1Pesc && (
                    <Pesca onClick={() => this.pesca1()} />
                  )}
                </div>
                <div className="h-1/3 flex justify-center items-center flex-col ">
                  {/*bg-green-400 */}
                  {this.state.btn1Att && (
                    <>
                      <p className="font-bold text-white text-center">
                        attacca con
                      </p>
                      <AttackList
                        selezionato={(valore, label) =>
                          this.attackSelection(parseInt(valore), label)
                        }
                        peso={this.state.car1.peso}
                        cilindrata={this.state.car1.cilindrata}
                        cavalli={this.state.car1.cavalli}
                        accellerazione={this.state.car1.accellerazione}
                      />
                    </>
                  )}
                </div>
                <div className="h-1/3 flex justify-center items-center">
                  {/*bg-green-500 */}
                  {this.state.btn1Pass && (
                    <Passa onClick={() => this.passa1()} />
                  )}

                  {this.state.btn1Att && (
                    <Attacca attackConfronto={() => this.attaccoConfronto1()} />
                  )}
                </div>
              </div>

              <div className="w-2/4 flex justify-center ">
                {/*bg-violet-500*/}
                <CardFront
                  card={this.state.car1}
                  scomparsa={this.state.btn1Card}
                />
              </div>
            </div>
            <div className="h-punt">
              {/*bg-teal-500*/}
              <Punteggi
                messaggio={this.state.mex1}
                punti={this.state.punti1}
                vincitore={this.state.vincitore}
                winner={this.state.btnWinner}
              />
            </div>
          </div>
          {/*dvisone due giocatori*/}
          <div className="h-full w-6/12 ">
            <div className="w-full flex bg-backCard justify-between h-auto pl-8 pb-4 pr-8 pt-4">
              <div className=" w-20 h-20">
                {this.state.btn2Turn && (
                  <img className=" w-20 h-20 " src={turno} alt="" />
                )}
                {/*bg-red-300 */}
              </div>
              <CardBack scomparsa={this.state.btn2BackCard} />
            </div>
            <div className="bg-frontCard flex justify-end p-10">
              <div className=" w-2/4 flex justify-center ">
                {" "}
                {/*bg-violet-500 */}
                <CardFront
                  card={this.state.car2}
                  scomparsa={this.state.btn2Card}
                />
              </div>

              <div className="flex flex-col w-1/4">
                {/*bg-violet-400 */}
                <div className="h-1/3  flex justify-center items-center ">
                  {/*bg-green-200 */}
                  {this.state.btn2Pesc && (
                    <Pesca onClick={() => this.pesca2()} />
                  )}
                </div>
                <div className="h-1/3 flex justify-center items-center flex-col ">
                  {/* bg-green-400 */}
                  {this.state.btn2Att && (
                    <>
                      <p className="font-bold text-white text-center">
                        attacca con
                      </p>
                      <AttackList
                        selezionato={(valore, label) =>
                          this.attackSelection(parseInt(valore), label)
                        }
                        peso={this.state.car2.peso}
                        cilindrata={this.state.car2.cilindrata}
                        cavalli={this.state.car2.cavalli}
                        accellerazione={this.state.car2.accellerazione}
                      />
                    </>
                  )}
                </div>
                <div className="h-1/3 flex justify-center items-center">
                  {/*bg-green-500 */}
                  {this.state.btn2Att && (
                    <Attacca attackConfronto={() => this.attaccoConfronto2()} />
                  )}
                  {this.state.btn2Pass && (
                    <Passa onClick={() => this.passa2()} />
                  )}
                </div>
              </div>
            </div>
            <div className="h-punt ">
              {/*bg-teal-200*/}
              <Punteggi
                messaggio={this.state.mex2}
                punti={this.state.punti2}
                vincitore={this.state.vincitore}
                winner={this.state.btnWinner}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GamePage;
