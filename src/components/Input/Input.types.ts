import type { InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'classname'
> {
	label: string
	name: string
	error?: string
}
