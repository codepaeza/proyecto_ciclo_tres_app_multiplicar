<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-expand-lg navbar-light py-3"
      style="background-color: #77eef7;"
    >
      <div class="container">
        <!--<a class="navbar-brand mx-auto"><h1>Multiplicando.com</h1></a>-->
        <router-link class="navbar-brand mx-auto" to="/"
          ><h1><b>Multiplicando.com</b></h1></router-link
        >
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

    <div class="container mt-6 m-5">
      <router-view></router-view>
    </div>

    <div class="container">
      <div class="row justify-content-star">
        <div class="col-md-8 m-0">
          <div class="bg-info">
            <span>
              <strong
                ><p align="center">
                  Cuál es la importancia de la multiplicación?
                  <br />
                  La multiplicación es muy importante, se utiliza constantemente
                  en actividades de la vida diaria para hacer cálculos y
                  comparaciones como, establecer el tiempo ideal para llegar a
                  un sitio, realizar compras y en forma profesional en negocios
                  e investigación.
                </p></strong
              >
            </span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="bg-primary">
            <section><p>Partes de la Multiplicación</p></section>
            <img
              src="/assets/Otra_Imagen-1.png"
              alt="Otra_Imagen-1.png"
              Width="1rem"
              height="1rem"
            />
          </div>
        </div>

        <div class="col-md-2">
          <div class="bg-white text-white">
            <!-- <img src="gifgracias.gif" Alt="Text-only display" Width="235" height="148"> -->
            <img
              src="/assets/monster-fluffy-monster-3d-monsters.png"
              alt="monster-fluffy-monster-3d-monsters.png"
              style="height: 10rem; width: 15rem; text-align: center"
            />
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright &copy; <b>GRUPO E-4-60 SPRINT 1 Y 2 CICLO 3- 2021</b></p>
        </div>
      </div>
    </footer>
  </div>
</template>
