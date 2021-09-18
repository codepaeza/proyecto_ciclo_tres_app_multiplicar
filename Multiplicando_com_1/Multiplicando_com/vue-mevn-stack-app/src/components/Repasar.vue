<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      
      <!-- Update Student content -->
      <div class="input-group mb-12">
  <label class="input-group-text" for="inputGroupSelect01">Seleccionar Tabla</label>
  <select class="form-select" id="inputGroupSelect01">
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
</div>

<table class="table table-bordered">

    <thead>
        <tr>
            <th>Multiplicando</th>
	    <th>Operación</th>
            <th>Multiplicador</th>
	    <th>Igual a</th>
            <th>Resultado</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-primary">
            <td>1</td>
	    <td>X</td>
            <td>0</td>
            <td>=</td>
            <td>0</td>
        </tr>
        <tr class="table-secondary">
            <td>1</td>
	    <td>X</td>
            <td>1</td>
	    <td>=</td>
            <td>1</td>
        </tr>
        <tr class="table-success">
            <td>1</td>
            <td>X</td>
            <td>2</td>
            <td>=</td>
            <td>2</td>
        </tr>
	<tr class="table-danger">
            <td>1</td>
  	    <td>X</td>
            <td>3</td>
	    <td>=</td>
            <td>3</td>
        </tr>
	<tr class="table-warning">
            <td>1</td>
	    <td>X</td>
            <td>4</td>
	    <td>=</td>
            <td>4</td>
        </tr>
	<tr class="table-primary">
            <td>1</td>
	    <td>X</td>
            <td>5</td>
	    <td>=</td>
            <td>5</td>
        </tr>
	<tr class="table-secondary">
            <td>1</td>
	    <td>X</td>
            <td>6</td>
	    <td>=</td>
            <td>6</td>
        </tr>
	<tr class="table-success">
            <td>1</td>
	    <td>X</td>
            <td>7</td>
	    <td>=</td>
            <td>7</td>
        </tr>
	<tr class="table-danger">
            <td>1</td>
	    <td>X</td>
            <td>8</td>
	    <td>=</td>
            <td>8</td>
        </tr>
	<tr table class="table-warning">
            <td>1</td>
	    <td>X</td>
            <td>9</td>
	    <td>=</td>
            <td>9</td>
        </tr>
    </tbody>
</table>



    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
