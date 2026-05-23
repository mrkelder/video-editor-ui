import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
	title: 'Components/TextInput',
	component: TextInput,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
	args: {
		label: 'Full name',
		name: 'fullname',
		placeholder: 'George',
	},
}