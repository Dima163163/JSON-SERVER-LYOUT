import { render } from "./render";

export const editUsers = () => {
	const tbody = document.getElementById('table-body')
	const form = document.querySelector('form');
	const nameInput = document.querySelector('#form-name')
	const emailInput = document.querySelector('#form-email')
	const childrenInput = document.querySelector('#form-children')

	tbody.addEventListener('click', (e) => {
		if(e.target.closest('.btn-edit')){
			const tr = e.target.closest('tr')
			const id = tr.dataset.key


			userService.getData(`http://localhost:4444/users/${id}`).then(user => {
				nameInput.value = user.name
				emailInput.value = user.email
				childrenInput.checked = user.children

				form.dataset.method = id
			})

			// userService.getUser(id).then(user => {
			// 	nameInput.value = user.name
			// 	emailInput.value = user.email
			// 	childrenInput.checked = user.children

			// 	form.dataset.method = id
			// })
		}
	})

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if(form.dataset.method){
			const id = form.dataset.method
			const user = {
					name: nameInput.value,
					email: emailInput.value,
					children: childrenInput.checked,
					permissions: false
			}

			userService.setData(`http://localhost:4444/users/${id}`, user, 'PATCH').then(() => {
				userService.getData('http://localhost:4444/users').then(users => {
					render(users)
					form.reset()
					form.removeAttribute('data-method')
				})
			})

			// userService.editUser(id, user).then(() => {
			// 	userService.getUsers().then(users => {
			// 		render(users)
			// 		form.reset()
			// 		form.removeAttribute('data-method')
			// 	})
			// })
		}
	})

}