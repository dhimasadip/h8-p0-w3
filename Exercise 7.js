
function hitungJumlahKata(kalimat) {
    var word = ''
    var wordSplit = []  
    for (i = 0; i <= kalimat.length; i++) {
      
      if (kalimat[i] !== ' ' && kalimat[i] !== undefined) {
        word += kalimat[i]
    
      } else if (word !== '') {
        wordSplit.push(word)
        word = ''

      }
    }
    return wordSplit.length
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5