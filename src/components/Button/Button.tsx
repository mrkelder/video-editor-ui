// TODO: refactor with enum
type ButtonType = 'button' | 'submit' | 'reset'

interface ButtonProps {
	children: string
	type?: ButtonType
	disabled?: boolean
	onClick?: () => void
}

export function Button({
	children,
	type = 'button',
	disabled = false,
	onClick,
}: ButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`px-4 py-2 rounded-md font-medium ${disabled ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white shadow'}`}
		>
			{children}
		</button>
	)
}
