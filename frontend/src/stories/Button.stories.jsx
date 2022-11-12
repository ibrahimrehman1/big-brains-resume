import React from "react";
import Button from "../components/Button";

export default {
    title: "Button",
    component: Button,
    argTypes: {clickHandler: {action: "Navigate"}}
}

const Template = (props) => <Button {...props} />


export const Red = Template.bind({})
Red.props = {
    styles: {
        backgroundColor: "red"
    },
    variant: "contained",
    size: "sm",
    text: "Hello World"
}