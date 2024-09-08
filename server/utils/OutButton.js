export class OutButton {
	constructor(floor, out_queue) {
		this.floor = floor;
		this.out_queue = out_queue;
	}
	add() {
		this.out_queue.push(this.floor);
		return this.out_queue;
	}
}
