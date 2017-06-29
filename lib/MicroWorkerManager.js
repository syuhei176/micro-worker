"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WorkerInterface = function () {
	function WorkerInterface() {
		_classCallCheck(this, WorkerInterface);

		this.queue = [];
		this.id = new Date().getTime();
	}

	_createClass(WorkerInterface, [{
		key: "getId",
		value: function getId() {
			return this.id;
		}
	}, {
		key: "send",
		value: function send(message) {
			this.queue.push(message);
		}
	}, {
		key: "deqMessage",
		value: function deqMessage() {
			return this.queue.shift();
		}
	}]);

	return WorkerInterface;
}();

var MicroWorkerManager = function () {
	function MicroWorkerManager() {
		_classCallCheck(this, MicroWorkerManager);

		this.workers = {};
		this.workerInterfaces = [];
	}

	_createClass(MicroWorkerManager, [{
		key: "createWorker",
		value: function createWorker(Worker) {
			var newWorker = new Worker();
			var newWorkerInterface = new WorkerInterface();
			this.workers[newWorkerInterface.getId()] = newWorker;
			this.workerInterfaces.push(newWorkerInterface);
			return newWorkerInterface;
		}
	}, {
		key: "sendMessage",
		value: function sendMessage(id, message) {
			var worker = this.workers[id];
			worker._handleCall(message);
		}
	}, {
		key: "_loop",
		value: function _loop() {
			var _this = this;

			this.workerInterfaces.forEach(function (wi, i) {
				_this._sendMessage(wi);
			});
		}
	}, {
		key: "_sendMessage",
		value: function _sendMessage(workerInterface) {
			var message = workerInterface.deqMessage();
			if (message) {
				this.sendMessage(workerInterface.getId(), message);
			}
		}
	}]);

	return MicroWorkerManager;
}();

exports.default = MicroWorkerManager;
module.exports = exports["default"];