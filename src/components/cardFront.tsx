import React from "react";

export interface CardType {
  peso: number;
  cilindrata: number;
  cavalli: number;
  accellerazione: number;
  rarita: string;
  nome: string;
  bandiera: string;
  img: string;
}
export interface CardFrontProps {
  card: CardType;
  scomparsa: boolean;
}

class CardFront extends React.Component<CardFrontProps> {
  constructor(props: CardFrontProps) {
    super(props);
    this.state = {
      peso: 0,
      cilindrata: 0,
      cavalli: 0,
      accellerazione: 0,
      rarita: "",
      nome: "",
      bandiera: "",
      img: "",
      cars: [],
    };
  }

  render() {
    console.log(this.props.card);
    const {
      rarita,
      nome,
      bandiera,
      img,
      accellerazione,
      cilindrata,
      cavalli,
      peso,
    } = this.props.card;
    return (
      <div className="h-card w-card drop-shadow-lg rounded-3xl ">
        {this.props.scomparsa && (
          <div className="h-card w-card drop-shadow-lg rounded-3xl p-3 bg-amber-100 border-0.5 border-black ">
            <div className=" w-full h-full ">
              {/*bg-black*/}
              <div className="w-full h-10 flex bg-amber-200 ">
                {/*bg-red-200 */} {/*bg-green-300 */}
                <div className=" flex items-center justify-center border-1 break-all border-black h-full w-3/12 ">
                  {rarita}
                </div>
                {/*bg-green-500*/}
                <div className=" flex items-center justify-center border-y break-all border-black h-full w-6/12 ">
                  {nome}
                </div>
                {/*bg-green-700 */}
                <div className=" flex items-center justify-center border-1 break-all border-black h-full w-3/12 ">
                  <img
                    className="w-full h-full"
                    src={bandiera ? require("../img/" + bandiera) : ""}
                    alt=" "
                  />
                </div>
              </div>
              <div className=" w-full mt-2.5 mb-2.5 h-3/6">
                {" "}
                {/*bg-yellow-200*/}
                {/*bg-red-800*/}
                <img
                  className=" w-full h-full"
                  src={img ? require("../img/" + img) : ""}
                  alt=""
                ></img>
              </div>{" "}
              {/*bg-red-800*/}
              <div className=" break-all text-caratterCar w-full flex list-none flex-col justify-center p-3 h-32">
                <div className="flex border-b-0.1 border-black  justify-between">
                  <li className="font-bold">PESO</li> <li>{peso} kg</li>
                </div>
                <div className="flex border-b-0.1 border-black justify-between">
                  <li className="font-bold">CILINDRATA</li>{" "}
                  <li>{cilindrata} cc </li>
                </div>
                <div className="flex border-b-0.1 border-black justify-between">
                  <li className="font-bold">CAVALLI</li> <li>{cavalli} cv </li>
                </div>
                <div className="flex border-b-0.1 border-black justify-between">
                  <li className="font-bold">ACCELLERAZIONE</li>{" "}
                  <li>{accellerazione} </li>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardFront;
