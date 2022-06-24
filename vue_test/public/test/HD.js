class HD {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(name) {
    // super()
    // this.status = HD.PENDING;
    // this.value = null;
    name(this.resolve, this.reject)
    console.log(this);
  }
  resolve() {
    console.log();
  }
  // show() {
  //   console.log(this);

  //   function test() {
  //     console.log(this);
  //   }
  //   test();
  // }
}