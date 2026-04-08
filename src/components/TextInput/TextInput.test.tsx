import { render } from 'vitest-browser-react'
import { expect, it, describe } from 'vitest'
import { TextInput } from './TextInput'

describe('TextInput component', () => {
	describe('props', () => {
		it("should have type 'text' by default", async () => {
			const screen = await render(
				<TextInput label='Full Name' name='fullname' />,
			)
			const input = screen.getByLabelText('Full Name')

			await expect.element(input).toHaveAttribute('type', 'text')
		})
		it('should render placeholder', async () => {
			const screen = await render(
				<TextInput label='Name' name='name' placeholder='George' />,
			)
			const input = screen.getByPlaceholder('George')
			await expect.element(input).toBeVisible()
		})
	})
})
