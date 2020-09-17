//4-1 JuliaJames while
var x = 1;

while (x <= 20){
    if ((x % 3 === 0) && (x % 5 === 0)) { 
        console.log("JuliaJames");
    }else if (x % 3 === 0) { 
        console.log("Julia");
    }else if (x % 5 === 0) { 
        console.log("James");
    }else { 
        console.log(x);
    }
    x = x + 1;
}
//4-2 99瓶果汁
var num = 99;

while (num > 0) {
    if (num === 2) {
        console.log("2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!");
    }
    else if (num > 1) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    }
    else {
        console.log("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!");
    }
    num = num-1;
}
//4-3 倒計時，發射!
var tSeconds = 60;

while (tSeconds >= 0){
    if(tSeconds===50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(tSeconds===31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(tSeconds===16){
        console.log("Activate launch pad sound suppression system");
    }else if(tSeconds===10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if(tSeconds===6){
        console.log("Main engine start");
    }else if(tSeconds===0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
        console.log("T-" + tSeconds + " seconds");
    }
    tSeconds = tSeconds-1;
}
//4-4 更改循環 for ( start; stop; step ) x++ ++x
for (var x = 9 ; x >= 1 ; x--) {
    console.log("hello " + x);
}
//4-5 糾正錯誤1
for (var x = 5 ; x < 10 ; x++) {
    console.log(x);
}
//4-6 糾正錯誤2
for (var k = 0 ; k < 200 ; k++) {
    console.log(k);
}
//4-7 階乘!
/*
x++ or ++x // 等同于 x = x + 1 
x-- or --x // 等同于 x = x - 1
x += 3 // 等同于 x = x + 3
x -= 6 // 等同于 x = x - 6
x *= 2 // 等同于 x = x * 2
x /= 5 // 等同于 x = x / 5
*/
var solution = 1;

for(var x = 12; x>=2; x--){
    solution = solution * x;
}
console.log(solution);
//4-8 找到我的座位
for(var x = 0 ; x <= 25 ; x++){
    for(var y = 0 ; y <= 99 ; y++){
        console.log(x + "-"+ y);
    }
}