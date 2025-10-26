import Container from "@/MyComponent/ServerSideComponents/NormalFiels/Container";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
