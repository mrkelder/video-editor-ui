import { render } from 'vitest-browser-react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router'
import { Link } from './Link'

describe('Link component', () => {
	describe('props', () => {
		it('should display text when it is passed to text prop', async () => {
			const screen = await render(
				<MemoryRouter>
					<Link text='Sign up' link='/sign-up' />
				</MemoryRouter>,
			)

			const link = screen.getByRole('link', { name: /sign up/i })

			await expect.element(link).toBeVisible()
		})

		it('should render internal link with React Router link', async () => {
			const screen = await render(
				<MemoryRouter>
					<Link text='Login' link='/login' />
				</MemoryRouter>,
			)

			const link = screen.getByRole('link', { name: /login/i })

			await expect.element(link).toHaveAttribute('href', '/login')
		})

		it('should render external link with target blank', async () => {
			const screen = await render(
				<MemoryRouter>
					<Link text='External link' link='https://example.com' />
				</MemoryRouter>,
			)

			const link = screen.getByRole('link', { name: /external link/i })

			await expect.element(link).toHaveAttribute('href', 'https://example.com')
			await expect.element(link).toHaveAttribute('target', '_blank')
		})

		it('should add security rel for external links', async () => {
			const screen = await render(
				<MemoryRouter>
					<Link text='External link' link='https://example.com' />
				</MemoryRouter>,
			)

			const link = screen.getByRole('link', { name: /external link/i })

			await expect
				.element(link)
				.toHaveAttribute('rel', 'noopener noreferrer')
		})
	})
})