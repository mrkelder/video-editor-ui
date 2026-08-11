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
		<main className='flex min-h-screen items-center justify-center bg-gray-50 px-4'>
			<section className='w-full max-w-md rounded-xl bg-white p-8 shadow-sm'>
				<h1 className='text-center text-2xl font-semibold text-gray-900'>
					Log in
				</h1>

				<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
					<div className='flex justify-end text-sm'>
						<Link text='Forgot Password?' link='/forgot-password' />
					</div>
					<Button type={ButtonType.Submit}>Log In</Button>
				</form>
				<p className='mt-6 text-center text-sm text-gray-600'>
					Don't have an account? <Link text='Sign up' link='/sign-up' />
				</p>
			</section>
		</main>
	)
}
