import React from "react";
import MaterialButton from "@mui/material/Button";
import PropTypes from "prop-types";

export default function Button({text, clickHandler, styles, variant, size}) {
  return (
    <MaterialButton
      variant={variant}
      size={size}
      style={styles}
      onClick={clickHandler}
    >
      {text}
    </MaterialButton>
  );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    styles: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
}