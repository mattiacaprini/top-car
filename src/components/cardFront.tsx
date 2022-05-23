import React from "react";

interface CardFrontProps {
  peso: number;
  cilindrata: number;
  potenza: number;
  accellerazione: number;
  rarita: number;
}

interface CardFrontState {}

class CardFront extends React.Component<CardFrontProps, CardFrontState> {
  constructor(props: CardFrontProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="h-card w-card rounded-3xl p-3 bg-amber-100 border-0.5 border-black ">
        <div className="bg-black w-full h-full ">
          <div className="w-full h-10 flex bg-red-200 ">
            <div className="bg-green-300 border-1 break-all border-black text-center h-full w-3/12 ">
              rarita
            </div>
            <div className="bg-green-500 border-y break-all border-black text-center h-full w-6/12 ">
              car name
            </div>
            <div className="bg-green-700 border-1 break-all border-black text-center h-full w-3/12 ">
              flag
            </div>
          </div>
          <div className="bg-yellow-200 w-full mt-2.5 mb-2.5 h-3/6">
            <img className="bg-yellow-400 w-full h-full"></img>
          </div>
          <div className="bg-red-800 break-all text-caratterCar w-full flex list-none flex-col justify-center p-3 h-32">
            <div className="flex justify-between">
              <li className="font-bold">PESO</li> <li>CIAO</li>
            </div>
            <div className="flex justify-between">
              <li className="font-bold">CILINDRATA</li> <li>CIAO</li>
            </div>
            <div className="flex justify-between">
              <li className="font-bold">POTENZA</li> <li>CIAO</li>
            </div>
            <div className="flex justify-between">
              <li className="font-bold">ACCELLERAZIONE</li> <li>CIAO</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFront;
