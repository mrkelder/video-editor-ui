import { Input } from '../Input'
import type { PasswordInputProps } from './PasswordInput.types'

export function PasswordInput(props: PasswordInputProps) {
	return <Input {...props} type='password' />
}
