//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling () {
    var hold = ''

    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            // hold = hold + input[i][j] + '\n'
            
            switch(true) {
                case j === 0:
                    hold = 'Nomor ID: ' +  input[i][j] + '\n'
                    break

                case j === 1:
                    hold += 'Nama Lengkap: ' + input[i][j] + '\n'
                    break

                case j === 2:
                    hold += 'TTL: ' + input[i][j] + ', ' + input[i][j+1] + '\n'
                    break

                case j === 4:
                    hold += 'Hobi: ' + input[i][j] + '\n'
                    break
            }
        }
        console.log(hold);
        hold = ''
    }
    
}

dataHandling()

