import type { InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'className'
> {
	label: string
	name: string
	error?: string
}
