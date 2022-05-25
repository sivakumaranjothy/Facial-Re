Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image"src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qwHxC3LON/model.json',modelLoaded);

function check(){
    console.log("check");
    img=document.getElementById("capture_image");
    classifier.classify(img , gotResult);
}


function gotResult(error,results){
    if (error){
        console.error(error);

    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=(results[0].confidence * 100).toFixed(2)+"%";
    }
}

    function modelLoaded(){
        console.log('model loaded')
    }
