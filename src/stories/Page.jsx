import React, { useEffect, useState } from "react";

import Button from "./Button";
import Checkbox from "./components/Checkbox";
import "./page.css";

export const Page = () => {
  const [typeNumber, setTypeNumber] = useState(0);
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");
  const [primary, togglePrimary] = useState(true);
  const [disabled, toggleDisable] = useState(false);

  const toggleText = (number) => {
    switch (number) {
      case 1:
        setLabel("Wanna save it?");
        setText(
          "I'm a super gold button with bookmark icon. I'll save it for you."
        );
        break;
      case 2:
        setLabel("Go there");
        setText("I'm a super gold button with caret icon. I'll lead you.");
        break;

      default:
        setLabel("Click me!");
        setText("I'm a super gold button. Just click me.");
    }
  };

  useEffect(() => {
    toggleText(typeNumber);
  }, [typeNumber]);

  const changeButtonTypeNumber = () => {
    if (typeNumber === 2) {
      setTypeNumber(0);
    } else {
      setTypeNumber(typeNumber + 1);
    }
  };

  const variantLabelText = `${
    primary ? "Imma bold! " : "Imma skinny! "
  } Make me 
  ${primary ? "skinny" : "bold"}!`;

  return (
    <article>
      <section>
        <h2>A little story of one button</h2>
        <p>Click on me to change my icon!</p>
        <Button
          primary={primary}
          disabled={disabled}
          label={label}
          icon={typeNumber === 1}
          caret={typeNumber === 2}
          onClick={changeButtonTypeNumber}
        />
        <p>{text}</p>

        <Checkbox
          checked={!primary}
          callback={() => togglePrimary(!primary)}
          label={variantLabelText}
          htmlFor="primary-toggle"
        />

        <Checkbox
          checked={disabled}
          callback={() => toggleDisable(!disabled)}
          label="Disable me!"
          htmlFor="disabled-toggle"
        />
      </section>
    </article>
  );
};
