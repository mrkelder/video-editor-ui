import { useState } from 'react'
import { Input } from '../Input'
import { Icon } from '../Icon'
import type { PasswordInputProps } from './PasswordInput.types'

export function PasswordInput(props: PasswordInputProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	return (
		<Input
			{...props}
			type={isPasswordVisible ? 'text' : 'password'}
			rightElement={
				<button
					type='button'
					onClick={() => setIsPasswordVisible(prev => !prev)}
					className='text-gray-400 hover:text-gray-600'
					aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
				>
					<Icon
						name={isPasswordVisible ? 'visibility_off' : 'visibility'}
						size={20}
					/>
				</button>
			}
		/>
	)
}
