import { addUserServer } from "../../../api/add_user";
import { States } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addUser() {
	clear();

	const userName = await prompt("UserName? ");

	printNewLine();
	print(`📨 Adding User "${userName}"...`);

	const success = await addUserServer(userName);

	if (success === true) print("🥳 User added successfully!");
	else print("😵 User not added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as States;
}
