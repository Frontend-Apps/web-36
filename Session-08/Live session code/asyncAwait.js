// laundry -> washclothes -> dry clothes

let washClothes = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    console.log("Clothes washed");
  }, 3000);
});



async function laundry(){
    await washClothes
    console.log("Dry clothes")
}

laundry()

// await - will pause execution of async function till promise is resolved

