import { Button } from "./button.component.tsx";

const settings = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      type: "string",
      description: "Вариант внешнего вида кнопки",
      options: ["square", "rounded"],
      control: { type: "radio" },
    },
    type: {
      type: "string",
      description: "Выбор типа кнопки",
      options: ["default", "pressed"],
      control: { type: "radio" },
    },
    prompt: {
      type: "string",
      name: "label",
      defaultValue: "Кнопка",
    },
  },
};

export default settings;

const Basic = (args) => {
  return <Button {...args}></Button>;
};

export const Square = Basic.bind({});
Square.args = {
  variant: "square",
  prompt: "Подтвердить",
};

export const Rounded = Basic.bind({});
Rounded.args = {
  variant: "rounded",
  prompt: "Подтвердить",
};
