import { render } from 'vitest-browser-react'
import { expect, it, describe, vi } from 'vitest'
import { Input } from './Input'

describe('Input component', () => {
	describe('props', () => {
		it('should render with correct label and link it to input', async () => {
			const screen = await render(<Input label='name' name='user' />)
			const input = screen.getByLabelText('name')

			await expect.element(input).toBeVisible()
		})
		it('should show placeholder text', async () => {
			const screen = await render(
				<Input label='name' name='user' placeholder='Enter' />,
			)
			const input = screen.getByLabelText('name')

			await expect.element(input).toHaveAttribute('placeholder', 'Enter')
		})
		it('should be disabled when disabled prop is true', async () => {
			const screen = await render(<Input label='name' name='user' disabled />)
			const input = screen.getByLabelText('name')

			await expect.element(input).toBeDisabled()
		})
		it('should display validation status (error)', async () => {
			const errorMessage = 'Fields filled in incorrectly'
			const screen = await render(
				<Input label='name' name='user' error={errorMessage} />,
			)
			const input = screen.getByText(errorMessage)

			await expect.element(input).toBeVisible()
		})
	})

	describe('events', () => {
		it('should call onChange when typing', async () => {
			const onChangeSpy = vi.fn()
			const screen = await render(
				<Input label='name' name='user' onChange={onChangeSpy} />,
			)
			const input = screen.getByLabelText('name')

			await input.fill('test value')
			expect(onChangeSpy).toHaveBeenCalled()
		})
	})
})
