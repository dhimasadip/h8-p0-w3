


function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    var group = []
    var firstChar = ''
   
    for (i = 0; i < animals.length; i++) {
        for (j = 0; j < animals.length -1; j++) {
      
            if (animals[j][0] > animals[j+1][0]) {
                var temp = animals[j]
                animals[j] = animals[j+1]
                animals[j+1] = temp
            }
        }
    }

    for (i = 0; i < animals.length; i++) {
        if (animals[i] != '') {

            firstChar = animals[i][0]
            for (j = i; j < animals.length; j++) {
                
                if (animals[j][0] == firstChar) {
                    group.push(animals[j])
                    animals[j] = ''
                } 
            }
            result.push(group)
            group = []
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]