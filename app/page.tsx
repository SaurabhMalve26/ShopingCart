import { Button } from "@/components/ui/button";
import Container from "@/MyComponent/ServerSideComponents/NormalFiels/Container";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-2xl font-semibold  text-red-700">Home </h2>

      <div>
        h2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        animi harum quisquam qui illum quaerat tempore inventore minima, veniam
        vitae ipsam ullam id voluptate vel unde cumque necessitatibus mollitia,
        perferendis doloremque exercitationem cupiditate non eveniet possimus?
        Nesciunt provident, consectetur laudantium hic molestiae animi aperiam
        quibusdam possimus illum omnis perspiciatis voluptatibus nemo dolorum
        sit reiciendis illo.''
      </div>
      <Button variant="destructive">Check it out </Button>
    </Container>
  );
};

export default Home;
