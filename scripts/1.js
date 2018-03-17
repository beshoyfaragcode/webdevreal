// asks how old you are 
var myprompt = window.prompt("how old are you ? "); 
//runs on start
function start (years) {
    var age = years;
    var say = "how does it feel like to be  " + years ;
    

    alert(say);
}

start(myprompt);