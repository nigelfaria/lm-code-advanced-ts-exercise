import { States } from "./states";

export class State {
	#state:States = "MENU";

	get() {
		return this.#state;
	}

	set(newState:States) {
		this.#state = newState;
	}
}
