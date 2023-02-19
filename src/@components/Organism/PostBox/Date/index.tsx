import React from "react";
import Text from "@/@components/Atoms/Text";

interface Props {
  date: string;
}
const Date = ({ date }: Props) => {
  return (
    <Text variant="f5-regular" color="dark_gray">
      {date}
    </Text>
  );
};

export default Date;
