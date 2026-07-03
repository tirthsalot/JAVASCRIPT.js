
document.getElementById("btn").addEventListener("click",async()=>{

    const image = document.getElementById("TIrth");

    try{
        const API = await fetch("https://dog.ceo/api/breeds/image/random");
        const DogAPI = await API.json();

        console.log(DogAPI);

if (DogAPI.status !== "success") {
    throw new Error("API failed");
} else {
    image.src = DogAPI.message;
}
    }catch(error){
        console.log("error this smg",error);
    }


})


