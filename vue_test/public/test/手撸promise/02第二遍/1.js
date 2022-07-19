class HD {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    this.promiseState = HD.PENDING;
    this.promiseResult = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.promiseState === HD.PENDING) {
      this.promiseResult = value;
      this.promiseState = HD.FULFILLED;
      // console.log(this.callbacks);
      queueMicrotask(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(value);
        });
      });
    }
  }
  reject(reason) {
    if (this.promiseState === HD.PENDING) {
      this.promiseResult = reason;
      this.promiseState = HD.REJECTED;
      queueMicrotask(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(reason);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {
        return this.promiseResult;
      };
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {
        return this.promiseResult;
      };
    }
    return new HD((resolve, reject) => {
      // console.log(this, 2222);
      if (this.promiseState === HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.promiseParse(onFulfilled(value), resolve, reject);
          },
          onRejected: (reason) => {
            this.promiseParse(onRejected(reason), resolve, reject);
          },
        });
      }
      if (this.promiseState === HD.FULFILLED) {
        queueMicrotask(() => {
          this.promiseParse(onFulfilled(this.promiseResult), resolve, reject);
        });
      }
      if (this.promiseState === HD.REJECTED) {
        queueMicrotask(() => {
          this.promiseParse(onRejected(this.promiseResult), resolve, reject);
        });
      }
    });
  }
  promiseParse(result, resolve, reject) {
    try {
      if (result instanceof HD) {
        result.then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
}
