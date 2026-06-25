import type { LinkProps } from './Link.types'

export function Link({ text, link, target, rel, ...props }: LinkProps) {
	const secureRel = target === '_blank' ? 'noopener noreferrer' : rel

	return (
		<a
			{...props}
			href={link}
			target={target}
			rel={secureRel}
			className='text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline'
		>
			{text}
		</a>
	)
}