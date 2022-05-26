import React from "react";

interface AttackListProps {
  selezionato: (parola: string, label: string) => void;
  peso: string;
  cilindrata: string;
  cavalli: string;
  accellerazione: string;
}

interface AttackListState {
  options: any;
}

class AttackList extends React.Component<AttackListProps, AttackListState> {
  constructor(props: AttackListProps) {
    super(props);
    this.state = {
      options: [
        {
          label: "Peso",
          value: this.props.peso,
        },
        {
          label: "Cilindrata",
          value: this.props.cilindrata,
        },
        {
          label: "Cavalli",
          value: this.props.cavalli,
        },
        {
          label: "Accellerazione",
          value: this.props.accellerazione,
        },
      ],
    };
  }

  handleChange(e: any) {
    this.props.selezionato(e.target.value, e.target.selectedOptions[0].label);
    console.log();
  }

  render() {
    return (
      <div>
        <select
          onChange={(e) => this.handleChange(e)}
          className="rounded-2xl drop-shadow-lg text-center bg-amber-100 border-2 border-stone-500 hover:bg-orange-200 "
        >
          {this.state.options.map((option: any, i: number) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default AttackList;
