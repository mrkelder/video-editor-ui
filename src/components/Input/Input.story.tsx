import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		error: {
			control: 'text',
			description: 'Validation error message',
		},
		disabled: {
			control: 'boolean',
		},
	},
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
	args: {
		label: 'User Name',
		name: 'username',
		placeholder: 'Enter your name...',
	},
}

export const WithError: Story = {
	args: {
		label: 'Email',
		name: 'email',
		placeholder: 'example@gmail.com',
		error: 'Invalid email address',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Blocked Field',
		name: 'blocked',
		disabled: true,
		placeholder: 'You cannot type here.',
	},
}
