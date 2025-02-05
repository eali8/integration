
const model = document.querySelector("#flowers"); 

function getOrbit(){
    console.log(`${model.getCameraOrbit()}`);
}

function setOrbit(orbit){
    model.cameraOrbit = orbit;
    console.log(orbit);
}
