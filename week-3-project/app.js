const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string') { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.entries.hasOwnProperty(key)) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
   
    // write me!
    this.currentKey = key;
      return true;
  },
  get currentEntry() {
    // write me!
    return this.entries[this.currentKey];
    
  },
  likedKeys: [],
  get likedEntries() {

    // write me!
    
  },
  likeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (!this.currentKey, key) { // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (key in this.currentEntry === true) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }
    
    // write me!

  },
  unlikeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (!this.currentKey, key) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    // write me!
  },
  
  isPrimitive: function (value) {
    // write me!
    return (value !== Object(value));
  },
  hasKey: function (obj, key) {
    // write me!
    return Object.keys(obj).some(v => v == key);
  },
  hasValue: function (obj, value) {
    // write me!
    return Object.values(obj).includes(value);
  },
  addEntry: function (key, value) {
    // write me!
    if (typeof key !== 'string') { 
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { 
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.hasKey(this.entries, key))  { 
      return new Error(`addEntry: key "${key}" already exists`);
    } else {this.entries[key] = value;
      return true;}
  },
  removeEntry: function (key) {
    // write me!
    if (typeof key !== 'string') { 
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
     delete this.entries[key];
     return true;
  },
  updateEntry: function (key, value) {
    // write me!
    if (typeof key !== 'string') { 
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { 
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }  else {this.entries[key] = value;
          return true;
        }
  },
  readAll: function () {
    // write me!
    var readAll = {...this.entries};
    var copy = Object.assign({}, readAll);
    return copy;
  },
  findByKey: function (key) {
    // write me!
    if (typeof key !== 'string') { 
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { 
      console.log('haskey');
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    const newObj = {};
    newObj[key] = this.entries[key];
    return newObj;
  },
  findByValue: function (value) {
    // write me!
    if (!this.isPrimitive(value)) { 
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value))  { 
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
    const newObj = {};
    if (this.hasValue(this.entries, value)){
      const arrIndex = Object.keys(this.entries);
      for (let i = 0; i < arrIndex.length; i++) {
        if (this.entries[arrIndex[i]] === value) {
          newObj[arrIndex[i]] = value;
        }
      }
      return newObj;
    }
  },
}

