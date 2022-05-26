import React from "react";

interface AttaccaProps {
  attackConfronto: () => void;
}
interface AttaccaState {}

class Attacca extends React.Component<AttaccaProps, AttaccaState> {
  constructor(props: AttaccaProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        onClick={() => {
          this.props.attackConfronto();
        }}
        className="rounded-xl drop-shadow-lg border-2 border-yellow-300 bg-yellow-200 p-4 hover:bg-yellow-300 hover:border-yellow-400 "
      >
        ATTACCA
      </button>
    );
  }
}

export default Attacca;
