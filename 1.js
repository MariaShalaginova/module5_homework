const num = prompt();
const n = + num;
console.log(typeof(n));
const k = (n)%2;

 if (typeof(n) === "number" && num !== "NaN" ) {
    if (n === 0) {
        console.log("ноль")}
        else if (k === 0)
        {console.log("Четное")}
        else {console.log("Нечетное")}
}
 else {
    console.log("Упс, вы ошиблись")
 } 



