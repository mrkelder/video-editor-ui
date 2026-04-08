import { useId } from 'react'
import type { InputProps } from './Input.types'

export function Input({ label, error, disabled, name, ...props }: InputProps) {
	const generatedId = useId()

	const baseInputStyles =
		'px-3 py-2 rounded-md border shadow-sm transition-colors focus:outline-none focus:ring-2'

	const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-200'
	const defaultBorderStyles =
		'border-gray-300 focus:border-blue-500 focus:ring-blue-200'

	const disabledStyles = 'bg-gray-400 cursor-not-allowed text-gray-500'
	const enabledStyles = 'bg-white'

	const totalInputClassName = `
    ${baseInputStyles}
    ${error ? errorStyles : defaultBorderStyles}
    ${disabled ? disabledStyles : enabledStyles}
  `.trim()

	return (
		<div className='flex flex-col gap-1.5 w-full'>
			<label
				htmlFor={generatedId}
				className='text-sm font-medium text-gray-700'
			>
				{label}
			</label>

			<input
				{...props}
				id={generatedId}
				name={name}
				disabled={disabled}
				aria-invalid={!!error}
				className={totalInputClassName}
			/>

			{error && <span className='text-xs text-red-600'>{error}</span>}
		</div>
	)
}
