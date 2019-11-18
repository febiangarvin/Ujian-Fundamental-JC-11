const lelang=(a)=> {
    var hargapertama = 10000
    var waktu = 0
    do{
        waktu++   
        if(waktu%4==0){
            hargapertama+= Math.ceil(hargapertama*(0.10))
        }
        else{
            hargapertama+= Math.ceil(hargapertama*(0.20))
            }
            if (hargapertama>=30000000){
                return 'Barang sudah laku'
            }
    }while(waktu<a)
    return hargapertama
}
console.log(lelang(2))
console.log(lelang(49))
console.log(lelang(50))
console.log(lelang(8))
console.log(lelang(12))