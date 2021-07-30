class Toolso {
  constructor() {
    this.num = 0;
  }
  log(str) {
    console.log("Toolso - Toolso - log - str", str);
  }
  add(num) {
    this.num += num;
  }
}

export default new Toolso();
