import { render } from "./render";

export const filterUsers = () => {
	const btnIsChildern = document.getElementById('btn-isChildren')
	const btnIsPermission = document.getElementById('btn-isPermissions')
	const btnIsAll = document.getElementById('btn-isAll')


	btnIsChildern.addEventListener('click', () => {
		userService.filterUsers('children').then(users => {
			render(users)
		})
	})
	btnIsPermission.addEventListener('click', () => {
		userService.filterUsers('permissions').then(users => {
			render(users)
		})
	})
	btnIsAll.addEventListener('click', () => {
		userService.getUsers().then(users => {
			render(users)
		})
	})
}