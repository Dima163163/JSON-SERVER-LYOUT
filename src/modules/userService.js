export class UserService {

		getData = async (url, str) =>{
			try{
				const responce = await fetch(url)
				const data = await responce.json()
				return data
			} catch(err){
				const table = document.querySelector('.table')
				const div = document.createElement('div') 
				div.innerHTML = `Произошла ошибка, данных нет!`
				table.append(div)
			}
		}

		setData = async(url, data , method) =>{
			try {
				const response = await fetch(url, {
					method: method,
					headers: {
						'Content-type': "application/json",
					},
					body: JSON.stringify(data)
				})
				const responceData = await response.json()
				return responceData 
			}catch(err){
				const table = document.querySelector('.table')
				const div = document.createElement('div') 
				div.innerHTML = `Произошла ошибка, данных нет!`
				table.append(div)
			}
		}


		// getUsers(){
		// 	return fetch('http://localhost:4444/users')
		// 		.then(res => res.json())
		// }

		// addUser(user) {
		// 	return fetch('http://localhost:4444/users', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-type': "application/json",
		// 		},
		// 		body: JSON.stringify(user)
		// 	}).then(res => res.json())
		// }

		// removeUser(id) {
		// 	return fetch(`http://localhost:4444/users/${id}`, {
		// 		method: 'DELETE'
		// 	}).then(res => res.json())
		// }

		// changeUser(id, data) {
		// 	return fetch(`http://localhost:4444/users/${id}`, {
		// 		method: 'PATCH',
		// 		body: JSON.stringify(data),
		// 		headers: {
		// 			'Content-type': "application/json",
		// 		},
		// 	}).then(res => res.json())
		// }

		// getUser(id) {
		// 	return fetch(`http://localhost:4444/users/${id}`).then(res => res.json())
		// }

		// editUser(id, user) {
		// 	return fetch(`http://localhost:4444/users/${id}`, {
		// 		method: 'PUT',
		// 		body: JSON.stringify(user),
		// 		headers: {
		// 			'Content-type': "application/json",
		// 		},
		// 	}).then(res => res.json())
		// }

		// filterUsers(filterOption) {
		// 	return fetch(`http://localhost:4444/users?${filterOption}=true`).then(res => res.json())
		// }

		// getSortUsers(sortOptions) {
		// 	return fetch(`http://localhost:4444/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(res => res.json())
		// }

		// getSearchUsers(str) {
		// 	return fetch(`http://localhost:4444/users?name_like=${str}`).then(res => res.json())
		// }
}