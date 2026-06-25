import type { IconProps } from './Icon.types'

export function Icon({
	name,
	size = 20,
	className = '',
	ariaHidden = true,
}: IconProps) {
	return (
		<span
			className={`material-symbols-outlined ${className}`.trim()}
			style={{ fontSize: size }}
			aria-hidden={ariaHidden}
		>
			{name}
		</span>
	)
}
