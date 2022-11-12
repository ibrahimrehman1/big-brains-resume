import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { clickHandler: { action: "Navigate" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  styles: {
    backgroundColor: "red",
    fontWeight: "bold",
  },
  variant: "contained",
  size: "sm",
  text: "Hello World",
};

export const Green = Template.bind({});
Green.args = {
  styles: {
    backgroundColor: "green",
    fontWeight: "bold",
  },
  variant: "contained",
  size: "md",
  text: "Hello World",
};
