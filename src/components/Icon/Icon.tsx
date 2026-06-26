import type { IconProps } from './Icon.types'

export function Icon({ name, size = 20, ariaHidden = true }: IconProps) {
	return (
		<span
			className='material-symbols-outlined'
			style={{ fontSize: size }}
			aria-hidden={ariaHidden}
		>
			{name}
		</span>
	)
}
