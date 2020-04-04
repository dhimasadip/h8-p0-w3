function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    
    var selisih = arr[arr.length-1] - arr[arr.length-2]
    var code = true

    for (i = arr.length-1; i > 0; i--) {

        if ((arr[i] - arr[i-1]) == selisih && code != false) {
            code = true
        } else {
            code = false
        }
    }
    return code
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false