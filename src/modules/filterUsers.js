import { render } from "./render";

export const filterUsers = () => {
	const btnIsChildern = document.getElementById('btn-isChildren')
	const btnIsPermission = document.getElementById('btn-isPermissions')
	const btnIsAll = document.getElementById('btn-isAll')


	btnIsChildern.addEventListener('click', () => {
		userService.getData(`http://localhost:4444/users?children=true`).then(users => {
			render(users)
		})

		// userService.filterUsers('children').then(users => {
		// 	render(users)
		// })
	})
	btnIsPermission.addEventListener('click', () => {
		userService.getData(`http://localhost:4444/users?permissions=true`).then(users => {
			render(users)
		})
		// userService.filterUsers('permissions').then(users => {
		// 	render(users)
		// })
	})
	btnIsAll.addEventListener('click', () => {
		userService.getData('http://localhost:4444/users').then(users => {
			render(users)
		})
		// userService.getUsers().then(users => {
		// 	render(users)
		// })
	})
}