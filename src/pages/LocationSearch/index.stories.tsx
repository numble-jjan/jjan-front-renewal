import React from "react";
import LocationSearch from "./index";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/LocationSearch",
  component: LocationSearch,
} as ComponentMeta<typeof LocationSearch>;

export const Deafult = () => <LocationSearch />;
