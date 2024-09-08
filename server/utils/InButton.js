export class InButton {
	constructor(floor, in_queue) {
		this.floor = floor;
		this.in_queue = in_queue;
	}
	add() {
		this.in_queue.push(this.floor);
		return this.in_queue;
	}
}
