<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3"
      style="background-color: #77eef7;"
    >
      <div class="container">
        <a class="navbar-brand mx-auto"><h1>Multiplicando.com</h1></a>
        <!--<ul class="nav navbar-nav flex-row float-rigth">

           <li class="nav-item">
            <router-link class="nav-link pr-3" to="/"
              >Create Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Students</router-link>
          </li> 
        </ul>-->
      </div>
    </nav>

    <div class="card-group">
      <div class="card" style="width: 30rem; height: 20rem; background-color: #faf27e;" >
        <img src="assets/logo.png" class="card-img-top" alt="logo.png" />
        <div class="card-body">
          <h3 class="card-title">REPASAR</h3>
          <p class="card-text">Vamos a Repasar las Tablas de Multiplicar</p>
          <a href="#" class="btn btn-primary">A Repasar</a>
        </div>
      </div>

      <div class="card" style="width: 30rem; background-color:#7efaca">
        <img src="assets/logo.png" class="card-img-top" alt="logo.png" />
        <div class="card-body">
          <h3 class="card-title">RETO</h3>
          <p class="card-text">Vamos a Jugar</p>
          <a href="#" class="btn btn-success">A Jugar</a>
        </div>
      </div>
    </div>

    

    <footer>
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright &copy; GRUPO E-4-60 SPRINT 1 Y 2 CICLO 3- 2021</p>
        </div>
      </div>
    </footer>
  </div>
</template>
