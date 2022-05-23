import React from "react";

interface CardFrontProps {
  peso: number;
  cilindrata: number;
  cavalli: number;
  accellerazione: number;
  rarita: string;
  nome: string;
  bandiera: string;
  img: string;
}

interface CardFrontState {}

class CardFront extends React.Component<CardFrontProps, CardFrontState> {
  constructor(props: CardFrontProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="h-card w-card drop-shadow-lg rounded-3xl p-3 bg-amber-100 border-0.5 border-black ">
        <div className="bg-black w-full h-full ">
          <div className="w-full h-10 flex bg-red-200 ">
            <div className="bg-green-300 flex items-center justify-center border-1 break-all border-black h-full w-3/12 ">
              {this.props.rarita}
            </div>
            <div className="bg-green-500 flex items-center justify-center border-y break-all border-black h-full w-6/12 ">
              {this.props.nome}
            </div>
            <div className="bg-green-700 flex items-center justify-center border-1 break-all border-black h-full w-3/12 ">
              <img className="w-full h-full" src={this.props.bandiera} />
            </div>
          </div>
          <div className="bg-yellow-200 w-full mt-2.5 mb-2.5 h-3/6">
            <img
              className="bg-yellow-400 w-full h-full"
              src={this.props.img}
            ></img>
          </div>
          <div className="bg-red-800 break-all text-caratterCar w-full flex list-none flex-col justify-center p-3 h-32">
            <div className="flex border-b-0.1 border-black  justify-between">
              <li className="font-bold">PESO</li> <li>{this.props.peso} kg</li>
            </div>
            <div className="flex border-b-0.1 border-black justify-between">
              <li className="font-bold">CILINDRATA</li>{" "}
              <li>{this.props.cilindrata} cc </li>
            </div>
            <div className="flex border-b-0.1 border-black justify-between">
              <li className="font-bold">CAVALLI</li>{" "}
              <li>{this.props.cavalli} cv </li>
            </div>
            <div className="flex border-b-0.1 border-black justify-between">
              <li className="font-bold">ACCELLERAZIONE</li>{" "}
              <li>{this.props.accellerazione} s</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFront;
