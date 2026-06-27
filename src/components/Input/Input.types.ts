import type { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'className'
> {
	label: string
	name: string
	error?: string
	rightElement?: ReactNode
}
