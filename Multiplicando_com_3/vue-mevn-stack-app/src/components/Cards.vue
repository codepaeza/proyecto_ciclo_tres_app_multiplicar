<template>
  <!--<div class="row justify-content-center">-->
  <!--<div class="col-md-6">-->

  <div class="card-group" style="width: 75rem; padding: 0; margin: 0;">
    <div
      class="card"
      style="height: 275px; width: 375px; background-color: rgb(40, 218, 69);"
    >
      <img
        src="../assets/Reto-1.png"
        class="card-img-top"
        alt="Reto-1.png"
        style="height: 6rem; width: 6rem; text-align: center"
      />
      <div class="card-body">
        <h2 class="card-title"><b>REPASAR</b></h2>
        <p class="card-text">
          <em>Vamos a Repasar las Tablas de Multiplicar</em>
        </p>
        <!--<a href="" class="btn btn-primary">A Repasar</a>-->
        <router-link class="btn btn-primary" to="/repasar"
          >A Repasar</router-link
        >
      </div>
    </div>

    <div class="card" style="width: 30rem; background-color:rgb(218, 120, 40)">
      <img
        src="../assets/penguin.png"
        class="card-img-top"
        alt="penguin.png"
        style="height: 6rem; width: 6rem; text-align: center"
      />
      <div class="card-body">
        <h2 class="card-title"><b>RETO</b></h2>
        <p class="card-text"><em>Vamos a Jugar</em></p>
        <!-- <a href="" class="btn btn-success">A Jugar</a> -->
        <router-link class="btn btn-success" to="/retos">A Jugar </router-link>

        <!-- <div class="card-body">
            <router-view></router-view>
          </div> -->
        <!-- Router view 
          <div class="container mt-5">
            <router-view></router-view>
          </div>-->
        <!--<ul class="btn btn-success">
            <li class="item">
              <router-link class="link pr-3" to="/"
                >Create Student</router-link
              >
            </li>-->
        <!--<li class="nav-item">
              <router-link class="nav-link" to="/view"
                >View Students</router-link
              >
            </li>-->
        <!--</ul>-->
      </div>
    </div>
  </div>

  <!--</div>-->
  <!--</div>-->
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
