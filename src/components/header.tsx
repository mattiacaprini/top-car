import React from "react";

interface HeaderProps {}
interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-purple-500 flex justify-center w-full h-20 ">
        <div className="bg-green-200 w-11/12 h-20 flex items-center justify-center border-b-8 border-gray-400 text-7xl ">
          BENVENTUI NEL GIOCO
        </div>
      </div>
    );
  }
}

export default Header;
