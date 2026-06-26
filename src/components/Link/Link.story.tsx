import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
	title: 'Components/Link',
	component: Link,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
	argTypes: {
		text: {
			control: 'text',
		},
		link: {
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof Link>

export const Internal: Story = {
	args: {
		text: 'Login',
		link: '/login',
	},
}

export const External: Story = {
	args: {
		text: 'Open external link',
		link: 'https://example.com',
	},
}