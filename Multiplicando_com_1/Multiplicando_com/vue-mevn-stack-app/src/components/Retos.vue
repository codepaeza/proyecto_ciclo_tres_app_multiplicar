<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Display Student List -->

      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect02"
          >Multiplicando</label
        >
        <select class="form-select" id="inputGroupSelect02">
          <option selected>Seleccione Multiplicando</option>
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
        <span class="input-group-text">X</span>
        <label class="input-group-text" for="inputGroupSelect03"
          >Multiplicador</label
        >
        <select class="form-select" id="inputGroupSelect02">
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
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Probar Respuesta
        </button>
      </div>
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
