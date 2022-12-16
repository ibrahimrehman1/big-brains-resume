import React, { MouseEventHandler } from "react";
import MaterialButton from "@mui/material/Button";
import PropTypes from "prop-types";

interface Props {
  text: string,
  clickHandler?: MouseEventHandler<HTMLButtonElement>,
  styles?: object,
  variant?: any,
  size?: any,
  isDisabled?: boolean,
  color?: any
}


const Button: React.FC<Props> = ({text, clickHandler, styles, variant, size, color, isDisabled = false}) => {
  return (
    <MaterialButton
      variant={variant}
      size={size}
      style={styles}
      onClick={clickHandler}
      disabled={isDisabled}
      color={color}
    >
      {text}
    </MaterialButton>
  );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    styles: PropTypes.object,
    variant: PropTypes.string,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
    color: PropTypes.string
}

export default Button;