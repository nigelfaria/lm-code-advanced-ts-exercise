import { User } from "../types/posts.types";

let userList:User[] = [
	{
		id: "1", name: "Spicy Hotfish", creationDate: new Date(),
	},
	{
		id: "2", name: "Sally-Anne Writerperson", creationDate: new Date(),
	},
	{
		id: "3", name: "Jimmy Alias", creationDate: new Date(),
	},
	{
		id: "4", name: 'Steve "The Hoop" Hooper', creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	return userList
}

export function addUser(userName: string): void {
	userList.push({
		id: (userList.length + 1).toString(),
		name: userName, creationDate: new Date()
	} as User);
}

export function getUser(id: string): User | undefined {
	return userList.find((u) => u.id === id)
}

export function deleteUser(id: string): void {
	userList = userList.filter((u) => u.id !== id)
}
