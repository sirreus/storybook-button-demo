import iconWhiteIcon from "../../assets/icon-white.svg";
import iconGoldIcon from "../../assets/icon-gold.svg";
import iconGreyIcon from "../../assets/icon-grey.svg";

import caretWhiteIcon from "../../assets/caret-white.svg";
import caretGoldIcon from "../../assets/caret-gold.svg";
import caretGreyIcon from "../../assets/caret-grey.svg";

import "./styles.css";

const Icon = ({ type, color }) => {
  const chooseIconByColor = (color) => {
    switch (color) {
      case "gold":
        return type === "icon" ? iconGoldIcon : caretGoldIcon;

      case "grey":
        return type === "icon" ? iconGreyIcon : caretGreyIcon;

      default:
        return type === "icon" ? iconWhiteIcon : caretWhiteIcon;
    }
  };

  return <img className={type} src={chooseIconByColor(color)} alt={type} />;
};

export default Icon;
