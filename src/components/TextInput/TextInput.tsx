import { Input } from '../Input'
import type { TextInputProps } from './TextInput.types'

export function TextInput(props: TextInputProps) {
	return <Input {...props} type='text' />
}
