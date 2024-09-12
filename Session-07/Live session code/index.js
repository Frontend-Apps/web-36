function washclothes(name,num,cb){
    //cb==ironclothes()
    console.log(` ${name} is Washing ${num} clothes`)
    cb()
}

function ironClothes(){
    console.log("Ironing clothes")
}

washclothes("Manohar",20,ironClothes)