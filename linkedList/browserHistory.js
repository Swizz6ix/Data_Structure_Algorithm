class browserHistory {
  constructor(homepage) {
  this.history = [homepage];
  this.future = [];
  }
  
  visit(url) {
    this.history.push(url);
    this.future = [];
  }

  back(steps) {
    while (steps > 0 && this.history.length > 1) {
      this.future.push(this.history.pop());
      steps--;
    }
    return this.history[this.history.length - 1];
  }

  forward(steps) {
    while (steps > 0 && this.future.length > 0) {
      this.history.push(this.future.pop());
      steps--;
    }

    return this.history[this.history.length - 1];
  }
}

const browser = new browserHistory('x.con');
browser.visit('google.com');
browser.visit('facebook.com');
browser.visit('youtube.com');
browser.back(2);
browser.forward(1);
browser.visit('linkedIn.com');
browser.forward(1);
console.log('browser', browser);
