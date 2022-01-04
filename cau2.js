let arr=[2,4,6,7,8,0]
function cau2(a, arr){
    for ( let i = 0; i < arr.length ;i++){
        if (arr[i] == a )  {
            return true
        }
    }
    return false
}
console.log(cau2(4,arr))

