import type { Meta, StoryObj } from '@storybook/react-vite'
import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof PasswordInput> = {
	title: 'Components/PasswordInput',
	component: PasswordInput,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PasswordInput>

export const Default: Story = {
	args: {
		label: 'Password',
		name: 'password',
		placeholder: 'Enter password',
	},
}