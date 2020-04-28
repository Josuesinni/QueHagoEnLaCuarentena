function remover(){
  var clase=$("#barras").attr('class');
  if (clase=="fas fa-bars"){
    $("#barras").removeClass("fas fa-bars").addClass("fas fa-times");
  }
    else if(clase=="fas fa-times"){
      $("#barras").removeClass("fas fa-times").addClass("fas fa-bars");
    }
  
}
function remover2(){
  var clase=$("#flecha").attr('class');
  if (clase=="fas fa-caret-right"){
    $("#flecha").removeClass("fas fa-caret-right").addClass("fas fa-caret-down");
  }
    else if(clase=="fas fa-caret-down"){
      $("#flecha").removeClass("fas fa-caret-down").addClass("fas fa-caret-right");
    }
  
}

function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
  }

function pcConfig(){
  var ptam = [1326,627];
  var ctam= [320,480];
  var ttam= [768,1024];

  if (tamVentana()> ctam && tamVentana()<ttam){
    var div= document.getElementById("navBar");
    //Ocultar elementos
    div.style.display= "none";

  }else if(tamVentana()>ttam && tamVentana()<ptam){

    var div= document.getElementById("navBar");
    //Mostrar elementos
    div.style.display= "none";
  }else{
    var div= document.getElementById("navBar");
    //Mostrar elementos
    div.style.display= "block";
  }
  return 0;
}

function celConfig(){
  var ptam = [1326,627];
  var ctam= [320,480];
  var ttam= [768,1024];
 a=1;
  if (tamVentana()> ctam && tamVentana()<ttam){
    var div= document.getElementById("navBarCel");
    div.style.display= "block";

  }else if(tamVentana()>ttam && tamVentana()<ptam){
    var div= document.getElementById("navBarCel");
    div.style.display= "none";

  }else{
    var div= document.getElementById("navBarCel");
    div.style.display= "none";
  }
  return a;
}

/*function cambio(){
  document.getElementById("").add
  j
  this.
<i class=""></i>
}*/

//Busca un elemento que tenga la clase definida
var dropdown = document.getElementsByClassName("dropdown-btn");
//Se declara una variable
var i;

for (i = 0; i < dropdown.length; i++) {
    //Se crea un evento y función
  dropdown[i].addEventListener("click", function() {
      //se le añade la clase activo
  this.classList.toggle("active");
  
  var dropdownContent = this.nextElementSibling;
  //Si el estilo esta bloqueado
  if (dropdownContent.style.display === "block") {
      //No es visible
  dropdownContent.style.display = "none";
  } else {
      //Es visible
  dropdownContent.style.display = "block";
  }
  });
}


