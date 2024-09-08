import { Car } from "./Car";
import { InButton } from "./InButton";
import { OutButton } from "./OutButton";
import { Dispatcher } from "./Dispatcher";
class ElevatorSystem {
	static in_queue = [];
	static out_queue = [];
	static floor = 0;
	static status = "IDLE";
	constructor() {
		this.car = new Car(ElevatorSystem.status, ElevatorSystem.floor);
		this.inButton = new InButton(
			ElevatorSystem.floor,
			ElevatorSystem.in_queue
		);
		this.outButton = new OutButton(
			ElevatorSystem.floor,
			ElevatorSystem.out_queue
		);
		this.dispatcher = new Dispatcher(
			ElevatorSystem.in_queue,
			ElevatorSystem.out_queue
		);
	}
}
