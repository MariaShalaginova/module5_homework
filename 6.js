let arr = [5, 5, 5, 5];
let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            count ++;
            console.log(count)
        }  
    }
if (count == arr.length) {
    console.log("true");
} else {
    console.log("false")
}
    
