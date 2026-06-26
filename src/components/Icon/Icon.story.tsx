import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'select',
			options: [
				'visibility',
				'visibility_off',
				'search',
				'add',
				'calendar_month',
				'check',
				'close',
				'edit',
				'delete',
				'attach_file',
			]
		},
		size: {
			control: 'number',
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