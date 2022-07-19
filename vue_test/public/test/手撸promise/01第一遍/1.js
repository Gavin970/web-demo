class HD {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    // console.log(this);
    if (this.status === HD.PENDING) {
      this.status = HD.FULFILLED;
      this.value = value;
      // this.callbacks[0](value);
      setTimeout(() => {
        this.callbacks.map((callback) => {
          return callback.onFulfilled(value);
        });
      });
    }
  }
  reject(reason) {
    if (this.status === HD.PENDING) {
      this.status = HD.REJECTED;
      this.value = reason;
      // this.callbacks[0](value);
      setTimeout(() => {
        this.callbacks.map((callback) => {
          return callback.onRejected(reason);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => this.value;
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => this.value;
    }
    // console.log(this);
    let promise = new HD((resolve, reject) => {
      if (this.status === HD.PENDING) {
        // console.log(3);
        // this.callbacks.push(onFulfilled, onRejected);
        // this.callbacks.push({ onFulfilled, onRejected });
        this.callbacks.push({
          onFulfilled: (value) => {
            // setTimeout(() => {
            this.parse(promise, onFulfilled(value), resolve, reject);
            // });
          },
          onRejected: (value) => {
            this.parse(promise, onRejected(value), resolve, reject);
          },
        });
      }

      if (this.status === HD.FULFILLED) {
        setTimeout(() => {
          this.parse(promise, onFulfilled(this.value), resolve, reject);
        });
      }
      if (this.status === HD.REJECTED) {
        setTimeout(() => {
          this.parse(promise, onRejected(this.value), resolve, reject);
        });
      }
    });
    return promise;
  }
  parse(promise, result, resolve, reject) {
    if (promise === result) {
      throw new TypeError('Chaining cycle detected for promise');
    }
    try {
      if (result instanceof HD) {
        // resolve(result.value);
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
}
