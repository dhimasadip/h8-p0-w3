
function pasanganTerbesar(num) {
    // you can only write your code here!

    var getString = num.toString()
    var originalData = []

    for (i = 0; i < getString.length; i++) {
        if (getString[i+1] !== undefined) {
            originalData.push(getString[i] + getString[i+1])
        }
    }
    
    for (i = 0; i < originalData.length; i++) {
        for (j = 0; j < originalData.length; j++) {
            if (originalData[j] > originalData[j+1]) {
                var hold = originalData[j]
                originalData[j] = originalData[j+1]
                originalData[j+1] = hold
            }
        }
    }
    return originalData[originalData.length-1]
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

  // IF THE BIGGEST NUMBER IS IN BEHIND
  console.log(pasanganTerbesar(4865179));  // 86