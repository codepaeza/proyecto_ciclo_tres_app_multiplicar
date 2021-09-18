<template>
  <!--<div class="row justify-content-center">-->
  <!--<div class="col-md-6">-->
     
  <div class="card-group">
    <div
      class="card"
      style=" height: 20rem; background-color: #faf27e;"
    >
      <img src="../assets/logo-1.png" class="card-img-top" alt="logo-1.png" style="height: 2rem; width: 5rem; text-align: center" />
      <div class="card-body">
        <h2 class="card-title"><b>REPASAR</b></h2>
        <p class="card-text"><em>Vamos a Repasar las Tablas de Multiplicar</em></p>
        <!--<a href="" class="btn btn-primary">A Repasar</a>-->
        <router-link class="btn btn-primary" to="/repasar" 
          >A Repasar</router-link
        >
      </div>
    </div>

    <div class="card" style="width: 30rem; background-color:#7efaca">
      <img src='../assets/logo-2.png' class="card-img-top" alt="logo-2.png" style="height: 3rem; width: 7rem; text-align: center" />
      <div class="card-body">
        <h2 class="card-title"><b>RETO</b></h2>
        <p class="card-text"><em>Vamos a Jugar</em></p>
        <!-- <a href="" class="btn btn-success">A Jugar</a> -->
        <router-link class="btn btn-success" to="/retos" >A Jugar </router-link>
       
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