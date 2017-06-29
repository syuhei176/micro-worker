class WorkerInterface {
	constructor() {
		this.queue = [];
		this.id = new Date().getTime();
	}
	getId() {
		return this.id
	}
	send(message) {
		this.queue.push(message)
	}
	deqMessage() {
		return this.queue.shift()
	}
}
export default class MicroWorkerManager {
	constructor() {
		this.workers = {}
		this.workerInterfaces = []
	}
	createWorker(Worker) {
		let newWorker = new Worker()
		let newWorkerInterface = new WorkerInterface()
		this.workers[newWorkerInterface.getId()] = newWorker
		this.workerInterfaces.push(newWorkerInterface)
		return newWorkerInterface
	}
	sendMessage(id, message) {
		const worker = this.workers[id]
		worker._handleCall(message)
	}
	_loop() {
		this.workerInterfaces.forEach((wi, i)=>{
			this._sendMessage(wi)
		})
	}
	_sendMessage(workerInterface) {
		const message = workerInterface.deqMessage()
		if(message) {
			this.sendMessage(workerInterface.getId(), message)
		}
	}
}