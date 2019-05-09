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

      <!-- Right aligned nav items -->
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
          <!-- Using 'button-content' slot -->
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

<!----              PANEL DE ADMINISTRADOR               ---->
<b-container fluid>
    <b-row>
        <b-col cols="12" sm="5" md="4" lg="3">
            <b-container fluid :style="panelcss()" fondopanel>
                <b-list-group >
                    <b-list-group-item disabled id="panel">Panel Administrativo</b-list-group-item>
                    <b-list-group-item id="fondopanel" :to="{name: 'home'}">Inicio</b-list-group-item>
                    <b-list-group-item id="fondopanel" :to="{name: 'registrarPracticantes'}">Registrar Practicantes</b-list-group-item>
                    <b-list-group-item id="fondopanel" href="#">Practicantes
                        <b-badge variant="success" pill>!</b-badge>
                    </b-list-group-item>
                    <b-list-group-item id="fondopanel" href="#foobar">Filtro de Practicantes</b-list-group-item>
                    <b-list-group-item id="fondopanel" href="#foobar">Reglamento</b-list-group-item>
                    </b-list-group>
            </b-container>
         </b-col>
  
<!--------          Form Filtro Practicante          ----------->

         <b-col cols="12" sm="7" md="8">
           <b-container :style="formulario()">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-5" label="Filtro de Busqueda de Practicante" label-for="input-3">
          </b-form-group>

    <div class="list-group-item">
    <label for="country" class="control-label">Estado</label>
    <select 
    class="form-control" 
    tabindex="11">
            <option v-for="(estado, index) in estados"
            :key="index" 
            :value="estado.id_estado ">{{ estado.estado }}
    </option>
    </select>
    </div>

    <div class="list-group-item">
    <label for="country" class="control-label">Municipio</label>
    <select 
    class="form-control" 
    tabindex="11">
            <option v-for="(municipio, index) in municipios"
            :key="index" 
            :value="municipio.id_municipio ">{{ municipio.municipio }}
    </option>
    </select>
    </div>

    <div class="list-group-item">
    <label for="country" class="control-label">Carrera</label>
    <select 
    class="form-control" 
    tabindex="11">
            <option v-for="(carrera, index) in carreras"
            :key="index" 
            :value="carrera.id_carrera ">{{ carrera.carrera }}
    </option>
    </select>
    </div>
    <b-row>
        <b-col cols="6"><b-button :style="btnsub()" @click="peticion()" type="submit" variant="success">Enviar Petición</b-button></b-col> 
        <b-col cols="6"><b-button :style="btnreset()" type="reset" variant="dark">Reset</b-button></b-col>
    </b-row>
    </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ estados }}</pre>
          </b-card>
          
        </div>
        </b-container>
      </b-col>

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
#fondopanel{
    background-color: #e8f5e9;
}
#cfe{
    margin-top: 10px;
    color: #17A2B8;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'app',
    data() {
      return {
        estados: [],
        municipios: [],
        carreras: [],
        form: {
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        urlestados: 'http://montiel.test/index.php/solicitarpracticante/estados',
        urlmunicipios: 'http://montiel.test/index.php/solicitarpracticante/municipios',
        urlcarrera: 'http://montiel.test/index.php/solicitarpracticante/carreras',
        urlpeticion: 'http://montiel.test/index.php/SolicitarPracticante/filtro'
      }
    },
    created(){
      this.getEstados();
      this.getMunicipios();
      this.getCarreras();
    },
    methods: {
      //    ----------------------- AXIOS -----------------------     //
      getEstados(){                         //Obtener los datos de estados en JSON
      axios.get(this.urlestados)
      .then(response => {
        this.estados = response.data
      })
      .catch(error => {
        //console.log(error);
      })
      },
      getMunicipios(){                      //Obtener los datos de municipios en JSON
      axios.get(this.urlmunicipios)
      .then(response => {
        this.municipios = response.data
      })
      .catch(error => {
        //console.log(error);
      })
      },
      getCarreras(){                         //Obtener los datos de carreras en JSON
      axios.get(this.urlcarrera)
      .then(response => {
        this.carreras = response.data
      })
      .catch(error => {
        //console.log(error);
      })
      },
      onSubmit(evt) {
        this.getDatos;
        evt.preventDefault()
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.food = null
      },
                              //    ----------------------- PETICIONES POST -----------------------     //
      peticion: function(){
        axios.post(this.urlpeticion)
        .then(function (response) {
          //console.log(response);
        })
        .catch(function (error) {
          //console.log(error);
        });
      },
                              //    ----------------------- CSS -----------------------     //
      panelcss(){
        return {
          'margin-left': '10px',
          'width': '100%',
          'line-height': '40px',
          'margin-top': '140px'
        }
      },
      formulario(){
        return {
          'width': '70%',
          'margin-top': '100px'
        }
      },
      btnsub(){
        return{
          'margin-left': '55%'
        }
      },
      btnreset(){
        return{
          'margin-right': '55%'
        }
      }
      /*btn(){
        return {
          'margin-top': '250px',
          'width': '70%',
          'height': '3.2rem',
          'margin-left': '20px',
          'text-align': 'center',                    
        }
      }*/
    }
  }
</script>

