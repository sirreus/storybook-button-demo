import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

// PRIMARY BUTTON
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  onClick: () => "I'm a super gold button. Just click me.",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  disabled: true,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  ...Primary.args,
  icon: true,
  onClick: () =>
    console.log(
      "I'm a super gold button with bookmark icon. I'll save it for you."
    ),
};

export const PrimaryWithIconDisabled = Template.bind({});
PrimaryWithIconDisabled.args = {
  ...PrimaryWithIcon.args,
  disabled: true,
};

export const PrimaryWithCaret = Template.bind({});
PrimaryWithCaret.args = {
  ...Primary.args,
  caret: true,
  onClick: () =>
    console.log("I'm a super gold button with bookmark icon. I'll lead you."),
};

export const PrimaryWithCaretDisabled = Template.bind({});
PrimaryWithCaretDisabled.args = {
  ...PrimaryWithCaret.args,
  disabled: true,
};

// SECONDARY BUTTON
export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Button",
  onClick: () => console.log("I'm an outlined gold button. Just click me."),
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true,
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  ...Secondary.args,
  icon: true,
  iconColor: "gold",
  onClick: () =>
    console.log(
      "I'm an outlined gold button with bookmark icon. I'll save it for you."
    ),
};

export const SecondaryWithIconDisabled = Template.bind({});
SecondaryWithIconDisabled.args = {
  ...SecondaryWithIcon.args,
  disabled: true,
};

export const SecondaryWithCaret = Template.bind({});
SecondaryWithCaret.args = {
  ...Secondary.args,
  caret: true,
  iconColor: "gold",
  onClick: () =>
    console.log(
      "I'm an outlined gold button with bookmark icon. I'll lead you."
    ),
};

export const SecondaryWithCaretDisabled = Template.bind({});
SecondaryWithCaretDisabled.args = {
  ...SecondaryWithCaret.args,
  disabled: true,
};
