function toggleMenu(){

var menu=document.getElementById("menu");

if(menu.style.display=="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}

}

function whatsapp(servico){

var numero="244930349132";

var data=new Date();

var dia=data.getDate();
var mes=data.getMonth()+1;
var ano=data.getFullYear();

var hora=data.getHours();
var minutos=data.getMinutes();

var texto="Olá Alfredo Services! 👋%0A%0A";
texto+="Tenho interesse no serviço de "+servico+".%0A";
texto+="Gostaria de receber mais informações.%0A%0A";
texto+="Obrigado.%0A";
texto+="📅 "+dia+"/"+mes+"/"+ano+"%0A";
texto+="⏰ "+hora+":"+minutos;

window.open("https://wa.me/"+numero+"?text="+texto,"_blank");

}
document.addEventListener("DOMContentLoaded", function(){

const videos = document.querySelectorAll("video");

videos.forEach(function(video){

video.addEventListener("play", function(){

videos.forEach(function(otherVideo){

if(otherVideo !== video){

otherVideo.pause();
otherVideo.currentTime = 0;

}

});

});

});

});