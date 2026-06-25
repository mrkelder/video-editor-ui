import { render } from 'vitest-browser-react'
import { describe, expect, it } from 'vitest'
import { Link } from './Link'

describe('Link component', () => {
	describe('props', () => {
		it('should display text when it is passed to text prop', async () => {
			const screen = await render(
				<Link text='Forgot password?' link='/forgot-password' />,
			)

			const link = screen.getByRole('link', {
				name: /forgot password/i,
			})

			await expect.element(link).toBeVisible()
		})

		it('should support link prop', async () => {
			const screen = await render(
				<Link text='Sign up' link='/sign-up' />,
			)

			const link = screen.getByRole('link', {
				name: /sign up/i,
			})

			await expect.element(link).toHaveAttribute('href', '/sign-up')
		})

		it('should support target blank', async () => {
			const screen = await render(
				<Link
					text='External link'
					link='https://example.com'
					target='_blank'
				/>,
			)

			const link = screen.getByRole('link', {
				name: /external link/i,
			})

			await expect.element(link).toHaveAttribute('target', '_blank')
		})

		it('should add security rel when target is blank', async () => {
			const screen = await render(
				<Link
					text='External link'
					link='https://example.com'
					target='_blank'
				/>,
			)

			const link = screen.getByRole('link', {
				name: /external link/i,
			})

			await expect
				.element(link)
				.toHaveAttribute('rel', 'noopener noreferrer')
		})
	})
})