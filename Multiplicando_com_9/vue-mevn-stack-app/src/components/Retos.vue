<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <!-- Display Student List -->

      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect02"
          ><b>Multiplicando</b></label
        >
        <select class="form-select" id="inputGroupSelect02" type="number" v-on:change="changeItem($event)">
          <option selected></option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      

        <span class="input-group-text"><b>X</b></span>
        <label class="input-group-text" for="inputGroupSelect03"
          ><b>Multiplicador</b></label
        >
        <select class="form-select" id="inputGroupSelect03" type="number" v-model="multiplicacion.multiplicador">
          <option selected>Seleccione Multiplicador</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese el resultado"
          aria-label="Ingrese el Resultado"
          aria-describedby="button-addon2"
          v-model="multiplicacion.resultado"
          
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          v-on:click="operacion()" 
        >
          <b>Obtener Resultado</b>
        </button>
      </div>
    </div>
     <p><b>Multiplicando seleccionado:</b>  {{multiplicacion.multiplicando}}</p>
     <p><b>Multiplicador seleccionado:</b>  {{multiplicacion.multiplicador}}</p>
     <p><b>Su Respuesta:</b>  {{multiplicacion.resultado}}</p>
     <p><b>La Respuesta Correcta Es:</b>  {{multiplicacion.producto}}</p>
     
      <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon3"
          v-on:click="equal()" 
        >
        <b>Verificar Resultado</b>
      </button>
  </div>     
</template>

<script>
 export default { 
 
  data(){    
    return {   
     multiplicacion:{ 
        multiplicando:null,
        multiplicador:null,
        resultado:"",
        producto:null,
     },
     
    };
  },
    methods:{
        changeItem: function changeItem(event){
        this.multiplicacion.multiplicando=event.target.value;
        },
        
        operacion(){
        return  this.multiplicacion.producto=this.multiplicacion.multiplicando*this.multiplicacion.multiplicador;
        
        },
    
        
        equal: function(){
          if(parseInt(this.multiplicacion.resultado) == this.multiplicacion.producto){
          return alert("Excelente!!! Tu respuesta es correcta");
          
          } else {
            return alert("Tu respuesta es incorrecta");

          }
        },
    },

    
    
 }


</script>
