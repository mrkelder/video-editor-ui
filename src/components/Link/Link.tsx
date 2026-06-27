import { Link as ReactRouterLink } from 'react-router'
import type { LinkProps } from './Link.types'

export function Link({ text, link }: LinkProps) {
	const isExternalLink = link.startsWith('https://')

	const linkClassName =
		'text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline'

	if (isExternalLink) {
		return (
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className={linkClassName}
			>
				{text}
			</a>
		)
	}

	return (
		<ReactRouterLink to={link} className={linkClassName}>
			{text}
		</ReactRouterLink>
	)
}
