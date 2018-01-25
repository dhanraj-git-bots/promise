/* global _promise */
var _promise = (function () {
    "use strict";

    let promise = function () {

        this.resolvePromise = function () {
            if (this.state === this.States.PENDING) {
                return;
            }
            let fn = this.state === this.States.RESOLVED ? this.resolveFunc : this.rejectFun;
            if (fn !== undefined && typeof fn === "function") {
                fn(this.value); // Promise method will be processed
            } else {
                console.log("Promise method not defined " + this.state); // NO I18N
            }
        };

        this.States = {
            PENDING: "pending", // NO I18N
            RESOLVED: "resolved", // NO I18N
            REJECTED: "rejected" // NO I18N
        };
        this.state = this.States.PENDING;
        this.resolveFunc = undefined;
        this.rejectFun = undefined;
	};
	
	promise.prototype = {
        resolve: function () {
            if (this.state !== this.States.RESOLVED) {
                this.state = this.States.RESOLVED;
            }
            if (this.resolveFunc !== undefined) {
				this.resolvePromise();
			}
        },
        reject: function () {
			if (this.state !== this.States.REJECTED) {
                this.state = this.States.REJECTED;
            }
            if (this.rejectFun !== undefined) {
				this.resolvePromise();
			}
        },
        done: function (onResolved, onRejected) {
            if ((onResolved !== undefined && typeof onResolved !== "function") || (onRejected !== undefined && typeof onRejected !== "function")) { // NO I18N
                console.log("resolve and reject must be functions"); // NO I18N
                return;
            }
            this.resolveFunc = onResolved || undefined;
			this.rejectFun = onRejected || undefined;
			var self = this;
            setTimeout(function () {
                self.resolvePromise();
            }, 0);
            return this;
        }
    };

    return promise;
})();