import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function browsePosts() {
	clear(false);

	const desiredPostId = await prompt("Enter Post ID");

	const desiredPostIdAsNumber = parseInt(desiredPostId);
	
	print(`📨 Fetching post "${desiredPostIdAsNumber}...`);

	const result = await fetchPost(desiredPostIdAsNumber);

	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}
