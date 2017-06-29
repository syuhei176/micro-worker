export default class MicroWorker {
	constructor() {

	}
	_handleCall(message) {
		let result = this.handleCall(message, this.state)
		this.state = result.state;
		return result.reply;
	}
	handleCall() {

	}
}