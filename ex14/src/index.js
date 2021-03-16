//Only change code below this line
function myForLoop1() {
  var evenNumbers = "";
  for (var i = 0; i <= 8; i += 2) {
    switch (i) {
      case 8:
        evenNumbers += i;
        break;
      default:
        evenNumbers += i + ",";
        break;
    }
  }
  return evenNumbers;
}
function myForLoop2() {
  var evenInverseNumbers = "";
  for (var i = 8; i >= 0; i -= 2) {
    switch (i) {
      case 0:
        evenInverseNumbers += i;
        break;
      default:
        evenInverseNumbers += i + ",";
        break;
    }
  }
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());

//Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2,
};
