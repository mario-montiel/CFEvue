<template>

<!-- --------------------NAV BAR----------------------->
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">CFE</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#" disabled>Practicantes</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


<!----              PANEL DE ADMINISTRADOR               ---->
<b-container fluid>
    <b-row>
        <b-col cols="6" sm="5" md="4" lg="3">
            <b-container fluid id="panelcss" fondopanel>
                <b-list-group >
                    <b-list-group-item disabled id="panel">Panel Administrativo</b-list-group-item>
                    <b-list-group-item id="fondopanel" :to="{name: 'home'}">Inicio</b-list-group-item>
                    <b-list-group-item id="fondopanel" :to="{name: 'registrarPracticantes'}">Registrar Practicantes</b-list-group-item>
                    <b-list-group-item id="fondopanel" :to="{name: 'registrarPracticantes'}">Practicantes
                        <b-badge variant="success" pill>!</b-badge>
                    </b-list-group-item>
                    <b-list-group-item id="fondopanel" href="#foobar">Filtro de Practicantes</b-list-group-item>
                    <b-list-group-item id="fondopanel" href="#foobar">Reglamento</b-list-group-item>
                    </b-list-group>
            </b-container>
         </b-col>
         <b-col cols="6 " lg="6"  ><b-button id="btn" variant="outline-success">VER SOLICITUDES</b-button></b-col>
    </b-row>
    <p id="cfe">Comisión Federal de Electricidad</p>
</b-container>


</div>
</template>
  
<style>
#panel{
    background-color: #17A2B8;
    color: white;
}
#panelcss{
    margin-left: 15px;
    width: 100%;
    line-height: 40px;
    margin-top: 35%;
}
#fondopanel{
    background-color: #e8f5e9;
}
#btn{
    margin-top: 250px;
    width: 70%;
    height: 3.2rem;
    margin-left: 20px;
    text-align: center;
}
#cfe{
    margin-top: 100px;
    color: #17A2B8;
}
</style>







