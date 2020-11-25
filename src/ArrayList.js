function ArrayList() {
    this.array = [];
    this.size = 0;
}
ArrayList.prototype.init =  function(array){
    this.array = array ;
    this.size = array.length ;

}

ArrayList.prototype.getSize = function() {
    return this.size;
}

ArrayList.prototype.cusPush = function(value) {
    this.array[this.array.length] = value;

    return ++this.size;
}

ArrayList.prototype.cusPop = function() {
    const arg = this.array[this.array.length-1];
    this.array.length =  this.array.length - 1;
    this.size--;

    return arg;
}


ArrayList.prototype.cusShift = function() {
    const arg = this.array[0];

    for (let i = 0; i < this.array.length; i++) {
        this.array[i] = this.array[i+1]
    }
    this.array.length =  this.array.length - 1;
    this.size = this.array.length;

    return arg;
}

ArrayList.prototype.cusUnShift = function(value) {
    for (let i = this.array.length; i > 0; i--) {
             this.array[i] = this.array[i-1]
    }
    this.array[0] = value;

    console.log(this.array);

    return ++this.size;
}
ArrayList.prototype.cusToString = function() {
    let arrayString = '[';

    for (let i = 0; i < this.array.length; i++) {
        if ( i === this.size - 1){
            arrayString += this.array[i];
        } else {
            arrayString += `${this.array[i]}, `;
        }
    }

    arrayString += ']'
    return arrayString;
}
ArrayList.prototype.cusClear = function() {
    this.array = [];
    this.size = 0;
}
ArrayList.prototype.cusReverse = function() {
    const reversed = [];
    for (let i = this.array.length-1; i >= 0;i--) {
        reversed[reversed.length] = this.array[i];
    }
    this.init(reversed)
    return reversed;
}
ArrayList.prototype.cusSlice = function(start, end) {
    let sliced = [];
    for (let i = start; i < end; i++) {
    sliced[sliced.length] = this.array[i];
    }

    return sliced;
}
const aList = new ArrayList();
aList.init([1, 5, 9]);
//aList.cusPop();
//aList.cusShift();
//console.log(aList.cusPush(5));
//console.log(aList.cusUnShift(15));
//console.log(aList.cusToString());
//console.log(aList.cusReverse());
console.log(aList.cusSlice(1,2));
module.exports = ArrayList;

