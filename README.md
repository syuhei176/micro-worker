# micro-worker
actor model framework for Node.JS


```
import {MicroWorkerManager, MicroWorker} from 'micro-worker'

const microWorkerManager = new MicroWorkerManager();

class MyWorker extends MicroWorker {
	constructor() {
		super()
	}
	handleCall(message, from, state) {
		console.log(message)
		return {
			reply: 'ok',
			state: state
		}
	}
}

const p = microWorkerManager.createWorker(MyWorker)

p.send({
	content: "Hello"
})

microWorkerManager._loop()
```
