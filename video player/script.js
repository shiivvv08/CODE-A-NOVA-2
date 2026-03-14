const upload = document.getElementById("videoUpload");
const player = document.getElementById("videoPlayer");

upload.addEventListener("change", function(){

const file = this.files[0];

if(file){

const videoURL = URL.createObjectURL(file);

player.src = videoURL;

}

});

