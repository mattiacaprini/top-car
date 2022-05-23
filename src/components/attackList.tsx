import React from "react";

interface AttackListProps {}
interface AttackListState {
  //   peso: number;
  //   cilindrata: number;
  //   potenza: number;
  //   accellerazione: number;
}

class AttackList extends React.Component<AttackListProps, AttackListState> {
  constructor(props: AttackListProps) {
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
      <div>
        <select className="rounded-2xl drop-shadow-lg text-center bg-amber-100 border-2 border-stone-500 hover:bg-orange-200 ">
          <option value="">Seleziona</option>
          <option value="peso">Peso</option>
          <option value="cilindrata">Cilindrata</option>
          <option value="potenza">Potenza</option>
          <option value="accellerazione">Accellerazione</option>
        </select>
      </div>
    );
  }
}

export default AttackList;
