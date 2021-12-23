var A = [30, 1, 5, 16, 19, 21, 2, 55];

var different = A[0]>17?A[0] - 17: 17-A[0];
let temp = 0;
var ans = A[0];

for(let n of A){
    temp = n>17?n - 17: 17-n;

    if(temp < different){
        different =temp;
        ans = n;
    }
}

console.log(ans);