import React from "react";
import Footer from "../components/footer";
import CardFront from "../components/cardFront";
import CardBack from "../components/cardBack";

interface GamePageProps {}
interface GamePageState {}

class GamePage extends React.Component<GamePageProps, GamePageState> {
  constructor(props: GamePageProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/*<Header />*/}
        <div className="w-full h-1000 bg-red-300">
          <CardBack></CardBack>

          {
            <CardFront
              peso={1000}
              cilindrata={3000}
              potenza={800}
              accellerazione={20}
              rarita={5}
            />
          }
        </div>

        <Footer />
      </>
    );
  }
}

export default GamePage;
