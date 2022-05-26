import React from "react";

interface PunteggiProps {
  messaggio: string;
  punti: number;
  vincitore: string;
  winner: boolean;
}
interface PunteggiState {}

class Punteggi extends React.Component<PunteggiProps, PunteggiState> {
  constructor(props: PunteggiProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-3 text-white ">
        <div className=" w-full h-16 ">
          <p className="font-bold  text-3xl">PUNTEGGIO: {this.props.punti} </p>
        </div>
        <div className=" w-full h-24 ">
          <p className="">{this.props.messaggio}</p>
        </div>
        <div className="w-full h-24 ">
          {this.props.winner && (
            <p className="text-4xl ">
              VINCITORE GIOCATORE : {this.props.vincitore}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Punteggi;
