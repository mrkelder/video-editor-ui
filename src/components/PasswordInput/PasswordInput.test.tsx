import { render } from 'vitest-browser-react'
import { expect, it, describe } from 'vitest'
import { PasswordInput } from './PasswordInput'

describe('InputPassword component', () => {
	describe('props', () => {
		it("should have type 'password' by default", async () => {
			const screen = await render(
				<PasswordInput label='Password' name='password' />,
			)
			const input = screen.getByLabelText('Password')

			await expect.element(input).toHaveAttribute('type', 'password')
		})
		it('should display error message when provided', async () => {
			const errorMessage = 'Wrong Password'
			const screen = await render(
				<PasswordInput label='Password' name='password' error={errorMessage} />,
			)
			const errorElement = screen.getByText(errorMessage)

			await expect.element(errorElement).toBeVisible()
		})
	})
})
