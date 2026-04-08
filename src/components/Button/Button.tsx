import { ButtonType, type ButtonProps } from './Button.types'

export function Button({
	children,
	type = ButtonType.Button,
	disabled = false,
	onClick,
}: ButtonProps) {
	const disabledButtonStyle = 'bg-gray-400 text-gray-200 cursor-not-allowed'
	const enabledButtonStyle = 'bg-blue-500 hover:bg-blue-600 text-white shadow'

	const totalClassName = `px-4 py-2 rounded-md font-medium transition-colors ${disabled ? disabledButtonStyle : enabledButtonStyle}`

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={totalClassName}
		>
			{children}
		</button>
	)
}
