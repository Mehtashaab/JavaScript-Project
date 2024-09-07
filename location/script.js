const button =document.getElementById("get-location-button")


function gotlocation(position){
    console.log(position)
}
function failedToGet(){
    console.log("Don't get User location")
}
button.addEventListener("click",async()=>{
    const result = navigator.geolocation.getCurrentPosition(gotlocation,failedToGet)
})
window.onstorage=(e)=>{
    alert("changed")
    console.log(e)
}