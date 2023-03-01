const availableStates = ["MENU", "SEND_MESSAGE", "SHOW_POSTS", 
						"SHOW_USERS", "BROWSE_POSTS", "ADD_USER","CABBAGE" ,"UNKNOWN"] as const;

export type States = typeof availableStates[number];
