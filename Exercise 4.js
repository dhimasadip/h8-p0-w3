
var biodata = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2() {
    
    biodata.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    biodata.splice(4, 1, "Pria", "SMA Internasional Metro")

    var date = biodata[3].split('/')
    var dateSplit = biodata[3].split('/')

    switch(Number(date[1])) {
        case 1:
            date[1] = 'Januari'
            break
        
        case 2:
            date[1] = 'Februari'
            break

        case 3:
            date[1] =  'Maret'
            break
            
        case 4:
             date[1] = 'April'
             break

        case 5:
            date[1] = 'Mei'
            break
                
        case 6:
            date[1] = 'Juni'
            break

        case 7:
            date[1] = 'Juli'
            break
            
        case 8:
            date[1] = 'Agustus'
            break
    
        case 9:
            date[1] = 'September'
            break
                
        case 10:
            date[1] = 'Oktober'
            break
    
        case 11:
            date[1] = 'November'
            break
                    
        case 12:
            date[1] = 'Desember'
            break
    }

    var newDate = dateSplit.join('-')
    var secondElement = biodata[1].slice(0, 15)
    dateSplit.sort(function (value1, value2) { return value2 - value1 })


    console.log(biodata)
    console.log(date[1])
    console.log(dateSplit)
    console.log(newDate)
    console.log(secondElement)
}

dataHandling2()