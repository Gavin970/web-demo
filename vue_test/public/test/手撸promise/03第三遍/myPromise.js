class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    this.promiseState = MyPromise.PENDING;
    this.promiseResult = null;
    this.callbacks = [];
    executor(this.resolve.bind(this), this.reject.bind(this));
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
    return new MyPromise((resolve, reject) => {
      if (this.promiseState === MyPromise.PENDING) {
        this.callbacks.push({
          onfulfilled: (value) => {
            try {
              let result = onfulfilled(value);
              if (result instanceof MyPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          },
          onrejected: (reason) => {
            try {
              let result = onrejected(reason);
              if (result instanceof MyPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          },
        });
      }
      if (this.promiseState === MyPromise.FULFILLED) {
        queueMicrotask(() => {
          try {
            let result = onfulfilled(this.promiseResult);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.promiseState === MyPromise.REJECTED) {
        queueMicrotask(() => {
          try {
            let result = onrejected(this.promiseResult);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
}
