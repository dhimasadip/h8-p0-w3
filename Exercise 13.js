function targetTerdekat(arr) {
    // you can only write your code here!
    var jarak = 0
    
    for (i = 0; i < arr.length-1; i++) {

        if (arr[i] == 'o' || arr[i] == 'x') {
           for (j = i+1; j < arr.length; j++) {
               
                if (arr[i] == 'o' && arr[j] == 'x') {
                   jarak++       
                   return jarak
                
               } else if (arr[i] == 'x' && arr[j] == 'o') {
                   jarak++
                   return jarak

               } else if (arr[i] == arr[j]) {
                   jarak = 0

               } else if (arr[j] == ' ') {
                   jarak++
               } 
           }
        } 
        jarak = 0
    }
    return jarak
  }
  
//   TEST CASES

  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2