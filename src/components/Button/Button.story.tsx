import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
		},
		onClick: { action: 'clicked' },
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: 'Button Text',
		type: 'button',
		disabled: false,
	},
}

export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
}

export const CustomStyle: Story = {
	args: {
		children: 'Custom Class Button',
		classname: 'bg-blue-500 hover:bg-purple-700 uppercase cursor-pointer',
	},
}
