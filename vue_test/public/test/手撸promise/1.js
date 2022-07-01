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
          return callback.onFulfilleed(value);
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
    return new HD((resolve, reject) => {
      if (this.status === HD.PENDING) {
        // console.log(3);
        // this.callbacks.push(onFulfilled, onRejected);
        // this.callbacks.push({ onFulfilled, onRejected });
        this.callbacks.push({
          onFulfilleed: (value) => {
            // setTimeout(() => {
            try {
              let result = onFulfilled(value);
              if (result instanceof HD) {
                // resolve(result.value);
                // result.then(resolve, reject);
                result.then(
                  (value) => {
                    resolve(value);
                  },
                  (reason) => {
                    reject(reason);
                  }
                );
                console.log('@@');
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
            // });
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value);
              if (result instanceof HD) {
                // resolve(result.value);
                result.then((value) => {
                  resolve(value);
                });
              } else {
                resolve(result);
              }
            } catch (error) {
              // console.log('111111');
              reject(error);
            }
          },
        });
      }

      if (this.status === HD.FULFILLED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value);
            if (result instanceof HD) {
              // resolve(result.value);
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
        });
      }
      if (this.status === HD.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value);
            if (result instanceof HD) {
              // resolve(result.value);
              result.then((value) => {
                resolve(value);
              });
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
