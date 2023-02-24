import React from "react";

import * as Styled from "./index.styles";

interface Props {
  locations: string[];
}

const LocationList = ({ locations }: Props) => {
  return (
    <Styled.Container>
      {locations.map((location, index) => (
        <Styled.ListItem key={index} variant="f4-regular">
          {location}
        </Styled.ListItem>
      ))}
    </Styled.Container>
  );
};

export default LocationList;
