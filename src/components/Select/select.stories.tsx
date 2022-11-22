import { Select } from "./select.component.tsx";

const settings = {
  title: "Select",
  component: Select,
  argTypes: {
    variant: {
      type: "string",
      defaultValue: "default",
      description: "Вариант внешнего вида селекта",
      options: ["default", "withLabel"],
      control: { type: "radio" },
    },
    type: {
      type: "string",
      defaultValue: "default",
      description: "Вариант типа селекта",
      options: ["default", "disabled"],
      control: { type: "radio" },
    },
    label: {
      type: "string",
      description: "Заголовок селекта",
      defaultValue: "Название",
    },
    options: {
      type: "array",
      defaultValue: ["Cтолик", "Заказ", "Гостиница"],
      control: { type: "object" },
    },
  },
};

export default settings;

const Basic = (args) => {
  return <Select {...args}></Select>;
};

export const Default = Basic.bind({});
Default.args = {
  variant: "default",
  type: "default",
};

export const Labeled = Basic.bind({});
Labeled.args = {
  variant: "withLabel",
  type: "default",
};
