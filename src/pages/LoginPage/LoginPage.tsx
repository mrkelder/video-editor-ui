import type { SubmitEventHandler } from 'react'
import { ButtonType } from '@components/Button/Button.types'
import { Button } from '@components/Button/Button'
import { Link } from '@components/Link'
import { PasswordInput } from '@components/PasswordInput'
import { TextInput } from '@components/TextInput'

export function LoginPage() {
	const handleSubmit: SubmitEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
	}

	return (
		<main>
			<section>
				<h1>Log In</h1>

				<form onSubmit={handleSubmit}>
					<TextInput
						label='Login'
						name='login'
						placeholder='Enter your email'
					/>
					<PasswordInput
						label='Password'
						name='password'
						placeholder='Enter your password'
					/>
					<Link text='Forgot Password?' link='/forgot-password' />
					<Button type={ButtonType.Submit}>Log In</Button>
				</form>
				<p>
					Don't have an account? <Link text='Sign up' link='/sign-up' />
				</p>
			</section>
		</main>
	)
}
