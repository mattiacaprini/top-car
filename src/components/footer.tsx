import React from "react";

interface FooterProps {}
interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full h-80 flex justify-center items-center text-7xl bg-yellow-300">
        <div>FOOTER</div>
      </div>
    );
  }
}

export default Footer;
