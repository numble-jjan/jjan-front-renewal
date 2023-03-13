import React from "react";
import Grid from "./index";
import Button from "../Button";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Core/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default: ComponentStory<typeof Grid> = args => {
  return (
    <Grid {...args}>
      <Button variant="whiteWithPurple" height="m">
        Item1
      </Button>
      <Button variant="whiteWithPurple" height="m">
        Item2
      </Button>
      <Button variant="whiteWithPurple" height="m">
        Item3
      </Button>
      <Button variant="whiteWithPurple" height="m">
        Item4
      </Button>
      <Button variant="whiteWithPurple" height="m">
        Item5
      </Button>
      <Button variant="whiteWithPurple" height="m">
        Item6
      </Button>
    </Grid>
  );
};

Default.args = {
  rows: 1,
  gap: 10,
};
