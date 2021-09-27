<!--Codigo script para página Repasar-->

<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Update Student content -->
      <div class="input-group mb-12">
        <label class="input-group-text" for="inputGroupSelect01 " 
          >Seleccionar Tabla</label
        >

        <!--<select class="form-select"  id= "inputGroupSelect01" method="post" action="" >-->
        <select class="form-select"  id= "inputGroupSelect01" v-model= "selected" v-on:change="changeItem($event)">
        <!--on:change="seleccionar"-->
        <!--<select v-model="selected">-->
        <!--<option disabled value="">A Repasar....</option>-->
          <option selected>A repasar...</option>
          <option value="0">Tabla del Cero</option>
          <option value="1">Tabla del Uno</option>
          <option value="2">Tabla del Dos</option>
          <option value="3">Tabla del Tres</option>
          <option value="4">Tabla del Cuatro</option>
          <option value="5">Tabla del Cinco</option>
          <option value="6">Tabla del Seis</option>
          <option value="7">Tabla del Siete</option>
          <option value="8">Tabla del Ocho</option>
          <option value="9">Tabla del Nueve</option>
        </select>
        <!--<span>Seleccionado: {{ selected }}</span>-->
      </div>

      <table class="table table-hover table-striped table-bordered ">
        <thead class="border border-dark">
          <tr>
            <th>Multiplicando</th>
            <th>Operación</th>
            <th>Multiplicador</th>
            <th>Igual a</th>
            <th>Producto</th>
          </tr>
        </thead>
        <tbody >
          <tr class="table-primary ">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>0</td>
            <td>=</td>
            <td>{{ producto0 = "0" * this.repasar }}</td>
          </tr>
          <tr class="table-secondary">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>1</td>
            <td>=</td>
            <td>{{ producto1 = "1" * this.repasar }}</td>
          </tr>
          <tr class="table-success">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>2</td>
            <td>=</td>
            <td>{{ producto2 = "2" * this.repasar }}</td>
          </tr>
          <tr class="table-danger">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>3</td>
            <td>=</td>
            <td>{{ producto3 = "3" * this.repasar }}</td>
          </tr>
          <tr class="table-warning">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>4</td>
            <td>=</td>
            <td>{{ producto4 = "4" * this.repasar }}</td>
          </tr>
          <tr class="table-primary">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>5</td>
            <td>=</td>
            <td>{{ producto5 = "5" * this.repasar }}</td>
          </tr>
          <tr class="table-secondary">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>6</td>
            <td>=</td>
            <td>{{ producto6 = "6" * this.repasar }}</td>
          </tr>
          <tr class="table-success">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>7</td>
            <td>=</td>
            <td>{{ producto7 = "7" * this.repasar }}</td>
          </tr>
          <tr class="table-danger">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>8</td>
            <td>=</td>
            <td>{{ producto8 = "8" * this.repasar }}</td>
          </tr>
          <tr table class="table-warning">
            <td>{{ this.repasar }}</td>
            <td>X</td>
            <td>9</td>
            <td>=</td>
            <td>{{ producto9 = "9" * this.repasar }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Multiplicando seleccionado:  {{repasar}}</p>
  </div>
</template>

<script>

export default { 
 
  data(){    
    return {   
      
      repasar:"repasar",
      
     
    };
  },
    methods:{
        changeItem: function changeItem(event){
        this.repasar=event.target.value;

        },
               
    },
    
 }

 
// opcion 2 type="text/javascipt"

/*opcion 1

export default {
  name: 'inputGroupSelect01',
  data: () => ({

    value: "0",



  }),

  methods:{
    seleccionar: function(){
      console.log(this.value)


    },
      producto0 : "0" * this.value,
  },

}*/

//Opcion2

/*export default {
  data(e) {
    return {
       e : document.getElementById("inputGroupSelect01"),
    //text : e.options[e.selectedIndex].text,
      value : e.options[e.selectedIndex].value,

    producto0 : "0" * e,
    producto1 : "1" * "0",
    producto2 : "2" * "0",
    producto3 : "3" * "0",
    producto4 : "4" * "0",
    producto5 : "5" * "0",
    producto6 : "6" * "0",
    producto7 : "7" * "0",
    producto8 : "8" * "0",
    producto9 : "9" * "0",

    };
  },
};




  /*var x =0;
  for (x=0; x<=10; x++){
    document.write("<option>" + parseInt(x) + "</option>");
  }

  function run() {
    document.getElementById("srt").value = document.getElementById("inputGroupSelect01").value;
  }*/



//import axios from "axios";



    //var align = inputGroupSelect01.getAttribute("align");
    //var x = 1

    //for (x = 1; x <= 10; x++)
    //{
      //var producto0=e*x;
      //document.write("<tr><td>");
      //document.write(e +"x"+x+"="+ producto0 + "<br>");
      //document.write("</td></tr>");
      //}
     /*//Obtiene la referencia a la lista
     var lista1=document.getElementById("inputGroupSelect01");

    //Obtiene el indice de la opción que se ha seleccionado
    var indiceSeleccionado1=lista1.selectedIndex;

    //Obtiene la opción seleccionada
    var opcionSeleccionada1=lista1.options[indiceSeleccionado1];

    //Mostrar el valor y el texto de la opción seleccionada
    var textoSeleccionado1=opcionSeleccionada1.text;
    var valorSeleccionado1=opcionSeleccionada1.value;
    alert("Opción seleccionada: " + textoSeleccionado + "\n Valor del multiplicando: " + valorSeleccionado);

    //Con la obtención del indice se obtiene el multiplicando y se realizan las multiplicaciones que
    //se almacenan en las variables respectivas

    var producto0=indiceSeleccionado1*0;
    var producto1=indiceSeleccionado1*1;
    var producto2=indiceSeleccionado1*2;
    var producto3=indiceSeleccionado1*3;
    var producto4=indiceSeleccionado1*4;
    var producto5=indiceSeleccionado1*5;
    var producto6=indiceSeleccionado1*6;
    var producto7=indiceSeleccionado1*7;
    var producto8=indiceSeleccionado1*8;
    var producto9=indiceSeleccionado1*9;*/
  
</script>