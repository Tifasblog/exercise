//3-2
var number = 2;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
//3-3
var musicians = 0;

if (musicians<=0){
    console.log("not a group");
} else if (musicians===1){
    console.log("solo");
} else if (musicians===2){
    console.log("duet");
} else if (musicians===3){
    console.log("trio");
} else if (musicians===4){
    console.log("quartet");
} else {
    console.log("this is a large group");
}
//3-4 謀殺之謎
var room = "gallery";
var suspect = "Ms. Van Cleve";
var weapon;
var person;
var solved = false;

if (room==="dining room") {
    weapon = "knife";
} else if (room==="billiards room") {
    weapon = "pool stick";
} else if (room==="gallery") {
    weapon = "trophy";
} else if (room==="ballroom"){
    weapon = "poison";
}

if (room==="dining room"){
    person = "Mr. Parkes";
} else if (room==="billiards room"){
    person = "Mrs. Sparr";
} else if (room==="gallery"){
    person = "Ms. Van Cleve";
} else if (room==="ballroom"){
    person = "Mr. Kalehoff";
}

if (suspect===person){
    solved = true;
}else{
    solved = false;
}

if (solved === true) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}else{
    console.log(solved);
}
//3-5 查看餘額
var balance = 10.999;
var checkBalance = true;
var isActive = true;

if(checkBalance === true && isActive === true && balance === 0){
    console.log("Your account is empty.");
}else if(checkBalance === true && isActive === true && balance < 0){
    console.log("Your balance is negative. Please contact bank.");
}else if(checkBalance === true && isActive === false){
    console.log("Your account is no longer active.");
}else if(checkBalance === true && isActive === true && balance > 0){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
}else{
    console.log("Thank you. Have a nice day!");
}
//3-6 冰激凌
var flavor="chocolate";
var vessel = "cone";
var toppings="others";
var solved;

if ((flavor === "vanilla" || flavor === "chocolate") && 
    (vessel === "cone" || vessel === "bowl") && 
    (toppings === "sprinkles" || toppings === "peanuts")){
    console.log("I'd like two scoops of "+ flavor +
    " ice cream in a " + vessel +  " with " + toppings + ".");
}
//3-7 穿什麼尺寸
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;
var size;

if(shirtWidth<"20" && shirtLength<="29" && shirtSleeve<"8.38"){
    size = "S";
}else if(shirtWidth>="20"&&shirtWidth<"22" &&
        shirtLength>="29"&&shirtLength<="30" && 
        shirtSleeve>="8.38"&&shirtSleeve<"8.63"){
    size = "M";
}else if(shirtWidth>="22"&&shirtWidth<"24" &&
        shirtLength>="30"&&shirtLength<"31" &&
        shirtSleeve>="8.63"&&shirtSleeve<"8.88"){
    size = "L";
}else if(shirtWidth>="24"&&shirtWidth<"26" &&
        shirtLength>="31"&&shirtLength<"33" &&
        shirtSleeve>="8.88"&&shirtSleeve<"9.63"){
    size = "XL";
}else if(shirtWidth>="26"&&shirtWidth<"28" &&
        shirtLength>="33"&&shirtLength<"34" &&
        shirtSleeve>="9.63"&&shirtSleeve<"10.13"){
    size = "2XL";
}else if(shirtWidth>="28" &&
        shirtLength>="34" &&
        shirtSleeve>="10.13"){
    size = "3XL";
}else {
    size = "NA";
}
console.log(size);
//3-8 了解食物鏈
var eatsPlants = 0;
var eatsAnimals = 0;
var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore")
  : (eatsAnimals ? "carnivore" : "undefined" );
console.log(category);
//3-9 學歷
var education = "no high school diploma";
var salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");