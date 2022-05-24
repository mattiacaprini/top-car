import React from "react";

interface PunteggiProps {}
interface PunteggiState {
  //   peso: number;
  //   cilindrata: number;
  //   potenza: number;
  //   accellerazione: number;
}

class Punteggi extends React.Component<PunteggiProps, PunteggiState> {
  constructor(props: PunteggiProps) {
    super(props);
    this.state = {
      //   peso: 0,
      //   cilindrata: 0,
      //   potenza: 0,
      //   accellerazione: 0,
    };
  }

  render() {
    return (
      <div className="p-3 text-white ">
        <p className="font-bold  text-3xl">PUNTEGGI</p>
        <p>P1</p>
      </div>
    );
  }
}

export default Punteggi;
