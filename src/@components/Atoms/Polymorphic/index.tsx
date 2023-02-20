import React, { forwardRef } from "react";
import type { ElementType, ComponentPropsWithRef } from "react";

interface PolymorphicProps<T extends ElementType> {
  as?: T;
}

const Polymorphic = forwardRef(
  <T extends ElementType = "div">(
    { as, ...props }: PolymorphicProps<T>,
    ref: ComponentPropsWithRef<T>["ref"],
  ) => {
    const Element = as || "div";
    return <Element ref={ref} {...props} />;
  },
);

Polymorphic.displayName = "Polymorphic";

export default Polymorphic;

<Polymorphic as="a" />;
