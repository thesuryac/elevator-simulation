export class Dispatcher {
	constructor(in_queue, out_queue) {
		this.in_queue = in_queue;
		this.out_queue = out_queue;
	}
	next() {
		if (this.in_queue.length === 0) {
			return this.out_queue.shift();
		}
		return this.in_queue.shift();
	}
}
