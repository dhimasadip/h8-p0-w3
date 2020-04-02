function palindrome(kata) {

    var checkPalindrome = ''
    for (i = kata.length -1; i >= 0; i--) {
        checkPalindrome += kata[i]
    }
    return kata === checkPalindrome
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false