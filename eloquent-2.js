//Looping a Triangle
var hash = "#";
for (var hash = "#"; hash.length <= 7; hash += "#") {
console.log(hash);
}
#
##
###
####
#####
######
#######

//BuzzFizz
var number = 0
for (var number = 0; number <= 1000; number += 1) {
  console.log(number);
  if (number % 3) {
    console.log("Fizz")
} else if(number % 5) {
  console.log ("Buzz")
}
}
0
1
Fizz
2
Fizz
3
Buzz
4
Fizz
5
Fizz
6
Buzz
7
Fizz
8
Fizz
9
Buzz

//Chessboard
