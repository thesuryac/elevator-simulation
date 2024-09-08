export class Car {
	constructor(status, floor) {
		this.status = status;

		this.floor = floor;
	}
	async move(startFloor, stopFloor) {
		this.status = startFloor > stopFloor ? "DOWN" : "UP";
		let wait =
			(await this.waitForSeconds()) * Math.abs(startFloor - stopFloor);
		this.floor = stopFloor;
		this.status = "IDLE";
	}
	/* stop() {

	} */
	waitForSeconds() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2 * 1000); // Convert seconds to milliseconds
		});
	}
}
