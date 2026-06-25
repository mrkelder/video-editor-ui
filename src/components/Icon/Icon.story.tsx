import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'text',
		},
		size: {
			control: 'number',
		},
		className: {
			control: 'text',
		},
		ariaHidden: {
			control: 'boolean',
		},
	},
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
	args: {
		name: 'visibility',
		size: 20,
	},
}

export const VisibilityOff: Story = {
	args: {
		name: 'visibility_off',
		size: 20,
	},
}

export const Search: Story = {
	args: {
		name: 'search',
		size: 20,
	},
}