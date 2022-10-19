import { Backward } from './backward.component.tsx'

const setting = {
	title: "Backward",
	component: Backward,
	argTypes: {
		type: {
			type: "string",
			description: "Выбор типа кнопки",
			options: ["default", "hovered"],
			control: { type: 'radio' }
		},
		prompt: {
			type: "string",
			name: "label",
			defaultValue: "Вернуться"
		}
	}
}

export default settings

const Basic = (args) => {
	return <Backward {...args}></Backward >
}

export const Default = Basic.bind({});
Default.args = {
	prompt: "Вернуться",
};