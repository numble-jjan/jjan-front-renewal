import React, { ComponentPropsWithRef, forwardRef, useRef } from "react";
import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ElementType,
  ReactElement,
} from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props = {},
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { color?: Rainbow | "black" }
>;

type TextComponent = <C extends ElementType = "span">(
  props: TextProps<C>,
) => ReactElement | null;

export const Text: TextComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "span">(
    { as, children, ...rest }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "span";

    return (
      <Component {...rest} ref={ref}>
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";

const divRef = useRef<HTMLDivElement | null>(null);

<Text as="div" ref={divRef}>
  Hello Text world
</Text>;
