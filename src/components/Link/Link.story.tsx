import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
	title: 'Components/Link',
	component: Link,
	tags: ['autodocs'],
	argTypes: {
		text: {
			control: 'text',
		},
		link: {
			control: 'text',
		},
		target: {
			control: 'select',
			options: ['_self', '_blank', '_parent', '_top'],
		},
	},
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
	args: {
		text: 'Forgot password?',
		link: '/forgot-password',
	},
}

export const External: Story = {
	args: {
		text: 'Open external link',
		link: 'https://example.com',
		target: '_blank',
	},
}