Webcam.attach("camera")
Webcam.set({
    height: 350,
    width: 250,
    image_format: "png",
    png_quality: 90
})

function capture() {
    Webcam.snap(function (dataUrl) {
        document.getElementById("result").innerHTML = "<img src='" + dataUrl + "' id='dataSnapshot'></img>"
    })

}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lDqR9RVNY/model.json", modelLoaded)
function modelLoaded() {
    console.log("the model worked!")
}

