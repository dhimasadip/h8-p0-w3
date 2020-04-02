
function angkaPalindrome(num) {
        
    var convertToString = ''
    
    for (i = num +1; i < 1100; i++ ) {
        convertToString = i.toString()
        var hold = ''

        for (j = convertToString.length-1; j >= 0; j--) {
            hold += convertToString[j]

            if (i == hold) {
            return hold
            }
            
        }  
    }

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001




