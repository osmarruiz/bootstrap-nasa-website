

function nuevo(){
    
    formulario.reset();
   document.getElementById('name').disabled= false;
   document.getElementById('lsname').disabled= false;
   document.getElementById('carreer').disabled= false; 
   document.getElementById('masculino').disabled= false; 
   document.getElementById('femenino').disabled= false; 
   document.getElementById('bocancelar').disabled= false; 
   document.getElementById('boguardar').disabled= false;
   

}

function guardar(){
    t=document.querySelector("table");

    var fila = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    var input= document.createElement("input");
    input.type="button";
    input.className="boeliminar";
    input.value="Eliminar";
    input.addEventListener("click", (e)=>{
        e.target.parentNode.parentNode.remove();
    })

    var value1 = document.getElementById("name").value;
    var value2 = document.getElementById("lsname").value;
    var value3 = document.getElementById("carreer").value;
    var value4 = document.querySelector('input[name="sexo"]:checked').value;

    var text1 = document.createTextNode(value1);
    var text2 = document.createTextNode(value2);
    var text3 = document.createTextNode(value3);
    var text4 = document.createTextNode(value4);

    
    col1.appendChild(text1);
    col2.appendChild(text2);
    col3.appendChild(text3);
    col4.appendChild(text4);
    col5.appendChild(input);
    
    fila.appendChild(col1);
    fila.appendChild(col2);	  
    fila.appendChild(col3);
    fila.appendChild(col4);
    fila.appendChild(col5);
    
    t.appendChild(fila);
    
    formulario.reset();
    document.getElementById('name').disabled= true;
    document.getElementById('lsname').disabled= true;
    document.getElementById('carreer').disabled= true; 
    document.getElementById('masculino').disabled= true; 
    document.getElementById('femenino').disabled= true; 
    document.getElementById('boguardar').disabled= true;
}


function cancelar(){
    formulario.reset();
    document.getElementById('name').disabled= true;
    document.getElementById('lsname').disabled= true;
    document.getElementById('carreer').disabled= true; 
    document.getElementById('masculino').disabled= true; 
    document.getElementById('femenino').disabled= true; 
    document.getElementById('bocancelar').disabled= true; 
   document.getElementById('boguardar').disabled= true;
   

}



function eliminar(){
    
    
}