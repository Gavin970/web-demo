class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    this.promiseState = MyPromise.PENDING;
    this.promiseResult = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.FULFILLED;
      this.promiseResult = value;
      queueMicrotask(() => {
        this.callbacks.map((callback) => {
          callback.onfulfilled(value);
        });
      });
    }
  }

  reject(reason) {
    if (this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.REJECTED;
      this.promiseResult = reason;
      queueMicrotask(() => {
        this.callbacks.map((callback) => {
          callback.onrejected(reason);
        });
      });
    }
  }

  then(onfulfilled, onrejected) {
    if (typeof onfulfilled !== 'function') {
      onfulfilled = () => {
        return this.promiseResult;
      };
    }
    if (typeof onrejected !== 'function') {
      onrejected = () => {
        return this.promiseResult;
      };
    }
    let promise = new MyPromise((resolve, reject) => {
      if (this.promiseState === MyPromise.PENDING) {
        this.callbacks.push({
          onfulfilled: (value) => {
            this.promiseParse(promise, onfulfilled(value), resolve, reject);
          },
          onrejected: (reason) => {
            this.promiseParse(promise, onfulfilled(reason), resolve, reject);
          },
        });
      }
      if (this.promiseState === MyPromise.FULFILLED) {
        queueMicrotask(() => {
          this.promiseParse(
            promise,
            onfulfilled(this.promiseResult),
            resolve,
            reject
          );
          // try {
          //   let result = onfulfilled(this.promiseResult);
          //   if (result instanceof MyPromise) {
          //     result.then(resolve, reject);
          //   } else {
          //     resolve(result);
          //   }
          // } catch (error) {
          //   reject(error);
          // }
        });
      }
      if (this.promiseState === MyPromise.REJECTED) {
        queueMicrotask(() => {
          this.promiseParse(
            promise,
            onrejected(this.promiseResult),
            resolve,
            reject
          );
        });
      }
    });
    return promise;
  }

  promiseParse(promise, result, resolve, reject) {
    if (promise === result) {
      throw (
        '(in promise) ' +
        new TypeError('Chaining cycle detected for promise #<Promise>')
      );
    }
    try {
      if (result instanceof MyPromise) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      if (reason instanceof MyPromise) {
        reason.then(resolve, reject);
      } else {
        reject(reason);
      }
    });
  }
  static all(promiseList) {
    return new MyPromise((resolve, reject) => {
      const result = [];
      promiseList.forEach((promise) => {
        promise.then(
          (value) => {
            result.push(value);
            if (result.length === promiseList.length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
  static race(promiseList) {
    return new MyPromise((resolve, reject) => {
      promiseList.forEach((promise) => {
        promise.then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
}
