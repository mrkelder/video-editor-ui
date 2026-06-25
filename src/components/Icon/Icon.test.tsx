import { render } from 'vitest-browser-react'
import { describe, it, expect } from 'vitest'
import { Icon } from './Icon'

describe('Icon component', () => {
	describe('props', () => {
		it('should display icon name when it is passed to name prop', async () => {
			const screen = await render(<Icon name='visibility' />)
			const icon = screen.getByText('visibility')

			await expect.element(icon).toBeVisible()
		})

		it('should apply material symbols class', async () => {
			const screen = await render(<Icon name='visibility' />)
			const icon = screen.getByText('visibility')

			await expect.element(icon).toHaveClass('material-symbols-outlined')
		})

		it('should support custom size', async () => {
			const screen = await render(<Icon name='visibility' size={24} />)
			const icon = screen.getByText('visibility')

			await expect.element(icon).toHaveStyle({
				fontSize: '24px',
			})
		})

		it('should support custom className', async () => {
			const screen = await render(
				<Icon name='visibility' className='text-gray-400' />,
			)
			const icon = screen.getByText('visibility')

			await expect.element(icon).toHaveClass('text-gray-400')
		})

		it('should be hidden from accessibility tree by default', async () => {
			const screen = await render(<Icon name='visibility' />)
			const icon = screen.getByText('visibility')

			await expect.element(icon).toHaveAttribute('aria-hidden', 'true')
		})

		it('should support ariaHidden false', async () => {
			const screen = await render(
				<Icon name='visibility' ariaHidden={false} />,
			)
			const icon = screen.getByText('visibility')

			await expect.element(icon).toHaveAttribute('aria-hidden', 'false')
		})
	})
})