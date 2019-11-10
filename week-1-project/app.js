const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    // write me! 
   
   return typeof param === 'string' && !isNaN(param);
  },
  addString: function (param) {
    if (typeof param !== "string") return false;
    // write this early return condition
    else if (isNaN(param)) {
      this.NaNyStrings.push(param);
    } else if (!isNaN(param)) {
      this.numberyStrings.push(param);
    }
    return true;
    // write me! (using this.isNumberyString)
    
   
  },
  allStrings: function () {
    // write me!
    if (this.NaNyStrings.length === 0) return this.numberyStrings;
    else if (this.numberyStrings.length === 0) return this.NaNyStrings;
    else return this.numberyStrings.concat(this.NaNyStrings);
  
  },
  evenStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    return this.numberyStrings;
  else if (
    this.NaNyStrings.length === 0 &&
    this.numberyStrings.length !== 0
  ) {
    function even(num) {
      return num % 2 === 0;
    }
    return this.numberyStrings.filter(even);
  } else if (
    this.NaNyStrings.length !== 0 &&
    this.numberyStrings.length !== 0
  ) {
    function even(num) {
      return num % 2 === 0;
    }
    return this.numberyStrings.filter(even);
  }
  },
  oddStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (
      this.NaNyStrings.length === 0 &&
      this.numberyStrings.length !== 0
    ) {
      function odd(num) {
        return num % 2 !== 0;
      }
      return this.numberyStrings.filter(odd);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      function odd(num) {
        return num % 2 !== 0;
      }
      return this.numberyStrings.filter(odd);
    }
  },
  negativeStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    return this.numberyStrings;
  else if (
    this.NaNyStrings.length === 0 &&
    this.numberyStrings.length !== 0
  ) {
    function negative(num) {
      return num < 0;
    }
    return this.numberyStrings.filter(negative);
  } else if (
    this.NaNyStrings.length !== 0 &&
    this.numberyStrings.length !== 0
  ) {
    function negative(num) {
      return num < 0;
    }
    return this.numberyStrings.filter(negative);
  }
  },
  positiveStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (
      this.NaNyStrings.length === 0 &&
      this.numberyStrings.length !== 0
    ) {
      function positive(num) {
        return num > 0;
      }
      return this.numberyStrings.filter(positive);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      function positive(num) {
        return num > 0 || num === "";
      }
      return this.numberyStrings.filter(positive);
    }
  },
  zeroStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (
      this.NaNyStrings.length === 0 &&
      this.numberyStrings.length !== 0
    ) {
      function zero(num) {
        return num == 0;
      }
      return this.numberyStrings.filter(zero);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      function zero(num) {
        return num == 0;
      }
      return this.numberyStrings.filter(zero);
    }
  },
  numberyAsNumbers: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
        return this.numberyStrings;
      else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
         function returnNumberyStrings(num) { return Number(num);}
         return this.numberyStrings.map(returnNumberyStrings);}
       else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
         function returnNumberyStrings(num) { return Number(num);}
         return this.numberyStrings.map(returnNumberyStrings);} 
  },
  NaNyAsNumbers: function () {
    // write me!
    return this.NaNyStrings.map(str => Number(str));
  },
  sumOfNumbery: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0) {
      return 0;
    }
    function add(a, b) {
      return a + b;
    }
    return this.numberyAsNumbers().reduce(add);
  },
  sumOfNaNy: function () {
    // write me!
    if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      return NaN;
    }
    function add(a, b) {
      return a + b;
    }
    return this.NaNyAsNumbers().reduce(add);
  
  },
};


