import type { AnchorHTMLAttributes } from 'react'

export interface LinkProps
	extends Omit<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		'href' | 'children' | 'className'
	> {
	text: string
	link: string
}