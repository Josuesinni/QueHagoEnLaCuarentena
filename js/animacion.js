 function capturar()
    {
        /*/ obtenemos e valor por el numero de elemento
        var porElementos=document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        var porId=document.getElementById("nombre").value;
        // Obtenemos el valor por el Nombre
        var porNombre=document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        var porTagName=document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        var porClassName=document.getElementsByClassName("formulario")[0].value;
 
        document.getElementById("resultado").innerHTML=" \
            Por elementos: "+porElementos+" \
            <br>Por ID: "+porId+" \
            <br>Por Nombre: "+porNombre+" \
            <br>Por TagName: "+porTagName+" \
            <br>Por ClassName: "+porClassName;

        }
        var texto = document.getElementById("num").value;
        var numero;
        numero = parseInt(texto) +1;
        document.getElementById("resultado").innerHTML=" \
            Por elementos: "+numero;*/
    }
/*function cambiaValores() 
{
        var texto = document.getElementById("num").value;
        var numero;
        numero = parseInt(texto) +1;
        var inputNombre = document.getElementById("num");
        inputNombre.value = numero;
        
        
 }*/
 function cambioImg(){
    var clase=$("#ej").attr('class');
    if (clase=="ab1"){
      $("#ej").removeClass("ab1").addClass("ab2");
    }
      else if(clase=="ab2"){
        $("#ej").removeClass("ab2").addClass("ab1");
        var texto = document.getElementById("num").value;
        var numero;
        numero = parseInt(texto) +1;
        var inputNombre = document.getElementById("num");
        inputNombre.value = numero;
        
    }
  }

  function cambioImg2(){
    var clase=$("#ej2").attr('class');
    if (clase=="lag1"){
      $("#ej2").removeClass("lag1").addClass("lag2");
    }
      else if(clase=="lag2"){
        $("#ej2").removeClass("lag2").addClass("lag1");
        var texto = document.getElementById("num2").value;
        var numero;
        numero = parseInt(texto) +1;
        var inputNombre = document.getElementById("num2");
        inputNombre.value = numero;
        
    }
  }
  function multi(){
    var texto = document.getElementById("num").value;
    var texto2 = document.getElementById("num2").value;    
    var numero;
    numero = parseInt(texto) + parseInt(texto2);
    var inputNombre = document.getElementById("num3");
    inputNombre.value = numero;
  }