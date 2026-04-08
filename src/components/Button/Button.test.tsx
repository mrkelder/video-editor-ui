import { render } from 'vitest-browser-react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'
import { ButtonType } from './Button.types'

describe('Button component', () => {
	describe('props', () => {
		it('should display "Hello World" when it\'s passed to children prop', async () => {
			const screen = await render(<Button>Hello World</Button>)
			const button = screen.getByRole('button', { name: /hello world/i })

			await expect.element(button).toBeVisible()
		})
		it('should be enabled', async () => {
			const screen = await render(<Button disabled={false}>Enabled</Button>)
			const button = screen.getByRole('button')

			await expect.element(button).toBeVisible()
		})
		it('should be disabled', async () => {
			const screen = await render(<Button disabled={true}>Disabled</Button>)
			const button = screen.getByRole('button')

			await expect.element(button).toBeVisible()
		})
		it('should support button type', async () => {
			const screen = await render(
				<Button type={ButtonType.Button}>Button</Button>,
			)
			const button = screen.getByRole('button')

			await expect.element(button).toHaveAttribute('type', 'button')
		})
		it('should support submit type', async () => {
			const screen = await render(
				<Button type={ButtonType.Submit}>Submit</Button>,
			)
			const button = screen.getByRole('button')

			await expect.element(button).toHaveAttribute('type', 'submit')
		})
		it('should support reset type', async () => {
			const screen = await render(
				<Button type={ButtonType.Reset}>Reset</Button>,
			)
			const button = screen.getByRole('button')

			await expect.element(button).toHaveAttribute('type', 'reset')
		})
	})
	describe('events', () => {
		it("should be clickable when it's enabled", async () => {
			const onClickSpy = vi.fn()
			const screen = await render(
				<Button onClick={onClickSpy}>Clickable</Button>,
			)
			const button = screen.getByRole('button')

			await button.click()
			expect(onClickSpy).toHaveBeenCalledTimes(1)
		})
		it("should not be clickable when it's disabled", async () => {
			const onClickSpy = vi.fn()
			const screen = await render(
				<Button onClick={onClickSpy} disabled={true}>
					Not Clickable
				</Button>,
			)
			const button = screen.getByRole('button')

			await button.click({ force: true })
			expect(onClickSpy).not.toHaveBeenCalled()
		})
	})
})
