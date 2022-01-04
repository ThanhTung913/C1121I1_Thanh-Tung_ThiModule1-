let a = ['kết thúc module 1'];

        function cau3(a){
            let nguyenAm = ['a','o','e','u','i']
            let arr = [];
            arr= a.split('');
            for (let i = 0; i < arr.length; i++){
                for ( let j = 0; j < nguyenAm.length; j++)
                    if (arr[i] ===  nguyenAm[j]){
                    return true
                }
            } return false
        }
    document.write(cau3('tung dep trai'))