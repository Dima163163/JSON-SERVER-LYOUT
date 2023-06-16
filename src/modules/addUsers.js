import { render } from "./render";

export const addUsers = () => {
	const form = document.querySelector('form');
	const nameInput = document.querySelector('#form-name')
	const emailInput = document.querySelector('#form-email')
	const childrenInput = document.querySelector('#form-children')

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if(!form.dataset.method){
			const user = {
					name: nameInput.value,
					email: emailInput.value,
					children: childrenInput.checked,
					permissions: false
			}

			userService.setData('http://localhost:4444/users', user, "POST").then(() => {
				userService.getData('http://localhost:4444/users').then(users => {
					render(users)
					form.reset()
				})
			})




			// userService.addUser(user).then(() => {
			// 	userService.getUsers().then(users => {
			// 		render(users)
			// 		form.reset()
			// 	})
			// })

		}
	})

	
}
