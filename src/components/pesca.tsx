import React from "react";

interface PescaProps {}
interface PescaState {}

class Pesca extends React.Component<PescaProps, PescaState> {
  constructor(props: PescaProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button className="rounded-xl drop-shadow-lg border-2 border-green-300 bg-green-200 p-4 hover:bg-green-300 hover:border-green-400">
        PESCA
      </button>
    );
  }
}

export default Pesca;
