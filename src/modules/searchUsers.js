import { render } from "./render";
import { debounce } from "./helpers";

export const searchUsers = () => {
	const input = document.getElementById('search-input')

	const debounceSearch = debounce(() => {
		userService.getData(`http://localhost:4444/users?name_like=${input.value}`).then(users => {
			console.log(users)
			render(users)
			debounce()
		})
		// userService.getSearchUsers(input.value).then(users => {
		// 	render(users)
		// 	debounce()
		// })
	}, 500)

	input.addEventListener('input', debounceSearch)
}