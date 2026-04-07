import { render } from 'vitest-browser-react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button component', () => {
	it('should render children text', async () => {
		const screen = await render(<Button>Click me</Button>)
		const button = screen.getByRole('button', { name: /click me/i })

		await expect.element(button).toBeVisible()
	})

	it('shouild have the correct HTML type attribute', async () => {
		// TODO: add enum instead of a raw string
		const screen = await render(<Button type='submit'>Submit</Button>)
		const button = screen.getByRole('button')

		await expect.element(button).toHaveAttribute('type', 'submit')
	})

	it('should be disabled when the prop is true', async () => {
		const screen = await render(<Button disabled={true}>Disabled</Button>)
		const button = screen.getByRole('button')

		await expect.element(button).toBeDisabled()
		await expect.element(button).toHaveClass('cursor-not-allowed')
	})

	it('should apply custom classname', async () => {
		const customClass = 'text-2xl'
		const screen = await render(<Button classname={customClass}>Custom</Button>)
		const button = screen.getByRole('button')

		await expect.element(button).toHaveClass(customClass)
	})

	it('should respond to click', async () => {
		const onClickSpy = vi.fn()
		const screen = await render(<Button onClick={onClickSpy}>Click Test</Button>)
		const button = screen.getByRole('button')

		await button.click()
		expect(onClickSpy).toHaveBeenCalled()
	})
})
