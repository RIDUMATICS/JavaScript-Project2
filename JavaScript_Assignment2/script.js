var i = 0

var element = document.querySelectorAll('.row');
element[0].style.display = "initial";

store = (e) =>{
    var inpt = document.getElementById(e);
    if(inpt.value != "" ){
        element[i++].style.display = "none";
        element[i].style.display = "initial";
        document.querySelector(".success").innerHTML += `<p>${e} : ${inpt.value}` 
    }
    
}