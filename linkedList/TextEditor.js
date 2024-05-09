class TextEditor {
  constructor() {
    this.before = [];
    this.after = [];
    this.sz_before = 0;
    this.sz_after = 0;
  }

  addText(text) {
    this.before.splice(this.sz_before, 0, ...text);
    this.sz_before += text.length;
  }

  deleteText(k) {
    k = Math.min(k, this.sz_before);
    this.sz_before -= k;
    return k;
  }

  cursorLeft(k) {
    k = Math.min(k, this.sz_before);
    while (k > 0) {
      this.sz_after++;
      this.after[this.sz_after - 1] = this.before[--this.sz_before];
      k--;
    }
    return this.before.slice(this.sz_before - Math.min(this.sz_before, this.before.length), this.sz_after).join('')
  }

  cursorRight(k) {
    k = Math.min(k, this.sz_after);
    while (k > 0) {
      this.sz_before++;
      this.before[this.sz_before - 1] = this.after[--this.sz_after];
      k--;
    }
    return this.before.slice(this.sz_before - Math.min(this.sz_before, this.before.length), this.sz_before).join('');
    
  }
}

class TextEditorII {
  constructor() {
    this.before = '';
    this.after = '';
  }

  addText(text) {
    this.before += text
  };

  deleteText(k) {
    let dk = Math.min(k, this.before.length);
    this.before = this.before.slice(0, this.before.length - k);
    return dk;
  }

  cursorLeft(k) {
    while (k-- > 0 && this.before.length > 0) {
      this.after += this.before.charAt(this.before.length - 1);
      this.before = this.before.slice(0, this.before.length - 1);
    }
    return this.before.slice(Math.max(0, this.before.length - 10));
  }

  cursorRight(k) {
    while (k-- > 0 && this.after.length > 0) {
      this.before += this.after.charAt(this.after.length - 1);
      this.after = this.after.slice(0, this.after.length - 1);
    };
    return this.before.slice(Math.max(0, this.before.length - 10));
  }
}

const textEd = new TextEditor()
textEd.addText('javascript')
textEd.cursorLeft(6)
console.log(textEd.deleteText(4))
textEd.deleteText(4);
textEd.addText('type');
console.log(textEd.cursorRight(6))
console.log('text', textEd);


const textEdII = new TextEditorII();
textEdII.addText('javascript');
textEdII.cursorLeft(6);
textEdII.deleteText(4);
textEdII.addText('type')
textEdII.cursorRight(6);
console.log('textII', textEdII);
