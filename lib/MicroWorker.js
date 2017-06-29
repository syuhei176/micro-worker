"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MicroWorker = function () {
	function MicroWorker() {
		_classCallCheck(this, MicroWorker);
	}

	_createClass(MicroWorker, [{
		key: "_handleCall",
		value: function _handleCall(message) {
			var result = this.handleCall(message, this.state);
			this.state = result.state;
			return result.reply;
		}
	}, {
		key: "handleCall",
		value: function handleCall() {}
	}]);

	return MicroWorker;
}();

exports.default = MicroWorker;
module.exports = exports["default"];