import { Button } from './button.component.tsx';

const settings = {
	title: 'Button',
	component: Button,
	argTypes: {
		type: {
			type: "string",
			description: "Выбор типа кнопки",
			options: ["default", "hovered", "pressed"],
			control: { type: 'radio' }
		},
		prompt: {
			type: "string",
			name: "label",
			defaultValue: "Кнопка"
		}
	},
}

export default settings

const Basic = (args) => {
	return <Button {...args}></Button >
}

export const Default = Basic.bind({});
Default.args = {
	prompt: "Подтвердить",
};