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
            description: "Загаловок поля ввода",
            name: "label",
            defaultValue: "Текст"
        },
        placeholder: {
            type: "string",
            description: "Подсказка поля ввода",
            name: "placeholder",
            defaultValue: ""
        },
        value: {
            type: "string",
            description: "Значение поля ввода",
            name: "value",
            defaultValue: ""
        },
        error: {
            type: "string",
            description: "Текст ошибки поля ввода",
            name: "error",
            defaultValue: ""
        },
        maxLength: {
            type: "number",
            description: "Максимальная длина значения поля ввода",
            name: "maxLength",
            defaultValue: 0
        }
    }
}

export default settings

const Basic = (args:any) => {
    return <Input {...args}></Input>
}

export const Default:any = Basic.bind({});
Default.args = {
    variant: "default",
    state: "default",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Hover:any = Basic.bind({});
Hover.args = {
    variant: "default",
    state: "hover",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Error:any = Basic.bind({});
Error.args = {
    variant: "error",
    state: "hover",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
    error: "Пример ошибки",
}

export const Success:any = Basic.bind({});
Success.args = {
    variant: "success",
    state: "hover",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "Введите вашу фамилию",
}

export const Disabled:any = Basic.bind({});
Disabled.args = {
    variant: "default",
    state: "disabled",
    type: "text",
    label: "Ваша фамилия",
    placeholder: "",
}

export const NoLabel:any = Basic.bind({});
NoLabel.args = {
    variant: "default",
    state: "default",
    type: "text",
    label: "",
    placeholder: "Введите вашу фамилию",
}
