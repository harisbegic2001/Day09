//Only change code below this line
function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    if (i == 9) {
      myNumbers += i;
    } else {
      myNumbers += i + ", ";
    }

    i++;
  } while (i <= 9);
  return myNumbers;
}
console.log(myDoWhile());

//Only change code above this line
module.exports = myDoWhile;
