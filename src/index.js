import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers"
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";


window.userService = new UserService

const url = 'http://localhost:4444/users'

const data = await userService.getData(url)

render(data)






// userService.getUsers().then(data => {
// 	render(data)
// })


addUsers()
removeUsers()
changePermissions()
editUsers()
filterUsers()
sortUsers()
searchUsers()