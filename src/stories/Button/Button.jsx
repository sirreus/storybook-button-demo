import React from "react";
import PropTypes from "prop-types";

import Icon from "../components/Icon";

import "./styles.css";

export const Button = ({
  primary,
  disabled,
  label,
  icon,
  iconColor,
  caret,
  onClick,
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const disabledClass = disabled ? "disabled" : null;
  return (
    <button
      type="button"
      className={["storybook-button", mode, disabledClass].join(" ")}
      onClick={disabled ? undefined : () => onClick()}
    >
      {icon && <Icon type="icon" color={disabled ? "grey" : iconColor} />}
      {label}
      {caret && <Icon type="caret" color={disabled ? "grey" : iconColor} />}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Is button active?
   */
  disabled: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Have button an icon?
   */
  icon: PropTypes.bool,
  /**
   * What an icon color to use
   */
  iconColor: PropTypes.string,
  /**
   * Have button a caret?
   */
  caret: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  disabled: false,
  icon: false,
  caret: false,
  onClick: undefined,
};
