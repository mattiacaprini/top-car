import React from "react";

interface PassaProps {}
interface PassaState {}

class Passa extends React.Component<PassaProps, PassaState> {
  constructor(props: PassaProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button className="rounded-xl drop-shadow-lg border-2 border-red-300 bg-red-200 p-4 hover:bg-red-300 hover:border-red-400 ">
        PASSA
      </button>
    );
  }
}

export default Passa;
