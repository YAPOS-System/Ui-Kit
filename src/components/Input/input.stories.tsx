import {Input} from './input.component';

const settings = {
    title: 'Input',
    component: Input,
    argTypes: {
        variant: {
            type: "string",
            description: "Вариант внешнего вида поля ввода",
            options: ["default","error","success"],
            control: {type: 'radio'}
        },
        state: {
            type: "string",
            description: "Вариант события поля ввода",
            options: ["default","hover","disabled"],
            control: {type: 'radio'}
        },
        type: {
            type: "string",
            description: "Выбор типа поля ввода",
            options: ["text","password","email"],
            control: {type: 'radio'}
        },
        label:{
            type: "string",
            name: "label",
            defaultValue: "Текст"
        },
        placeholder: {
            type: "string",
            name: "placeholder",
            defaultValue: ""
        },
        prompt: {
            type: "string",
            name: "prompt",
            defaultValue: ""
        },
    }
}

export default settings

const Basic = (args) => {
    return <Input {...args}></Input>
}

export const Default = Basic.bind({});
Default.args = {
    variant: "default",
    state: "default",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Hover = Basic.bind({});
Hover.args = {
    variant: "default",
    state: "hover",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Error = Basic.bind({});
Error.args = {
    variant: "error",
    state: "hover",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Success = Basic.bind({});
Success.args = {
    variant: "success",
    state: "hover",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Disabled = Basic.bind({});
Disabled.args = {
    variant: "default",
    state: "disabled",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "",
}

export const NoLabel = Basic.bind({});
NoLabel.args = {
    variant: "default",
    state: "default",
    type: "text",
    label: "",
    placeholder: "Введите вашу фамилию",
}

