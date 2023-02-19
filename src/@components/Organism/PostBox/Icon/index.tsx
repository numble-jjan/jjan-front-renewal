import React from "react";

interface Props {
  element: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Icon = ({ element }: Props) => {
  const IconElement = element;
  return (
    <div>
      <IconElement />
    </div>
  );
};

export default Icon;
