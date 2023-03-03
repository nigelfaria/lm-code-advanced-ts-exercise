import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function addUserServer(userName: string) {
	try {
		const result = await fetch(baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: userName }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
