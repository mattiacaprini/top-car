import React from "react";

interface CardBackProps {
  scomparsa: boolean;
}
interface CardBacktState {}

class CardBack extends React.Component<CardBackProps, CardBacktState> {
  constructor(props: CardBackProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="h-cardBack drop-shadow-lg w-cardBack rounded-3xl">
        {this.props.scomparsa && (
          <div className="h-cardBack drop-shadow-lg w-cardBack rounded-3xl p-3 border-0.5 border-black bg-amber-100">
            <div className=" font-bold text-card w-full bg-imgBackCard bg-cover bg-no-repeat flex flex-col items-center justify-center h-full border-2 border-black rounded-3xl ">
              <p>TOP</p>
              <p>TRUMPS</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardBack;
