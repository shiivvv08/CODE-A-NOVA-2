(function(){
emailjs.init("15aON7dphcYdkNksz");
})();

document.getElementById("contact-form").addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm(
"service_4bsdiys",
"template_lgmorxc",
this
)

.then(function(){
document.getElementById("status").innerHTML="Message sent successfully!";
})

.catch(function(error){
document.getElementById("status").innerHTML="Failed to send message.";
});

});