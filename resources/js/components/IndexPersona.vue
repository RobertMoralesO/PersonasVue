<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                  <md-icon>menu</md-icon>
              </md-button>
              <span class="md-title">{{nombre_app}}</span>
          </div>
         <vue-fuse 
         :keys="personas_keys" 
         :list="personas" 
         :defaultAll="true"
         :threshold="0.3"
         @fuseResultsUpdated="results($event)"
         class="fuse">
         </vue-fuse>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>
          <md-menu>
            <md-icon md-menu-trigger>more_vert</md-icon>
            <md-menu-content>
              <md-menu-item>Cerrar Sesión</md-menu-item>

            </md-menu-content>
          </md-menu>
        </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>people</md-icon>
            <span class="md-list-item-text">Personas</span>
             <md-badge class="md-primary" md-content="6" />
          </md-list-item>

          <md-list-item>
            <md-icon>power_settings_new</md-icon>
            <span class="md-list-item-text">Cerrar Sesión</span>
          </md-list-item>

          
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <card-persona></card-persona> 
        <empty-persona></empty-persona>
        
        <agregar-persona></agregar-persona> 
    
        <md-button class="md-fab md-primary md-fab-bottom-right" @click="activar_ventana_agregar()">
          <md-icon>add</md-icon>
        </md-button> 
      </md-app-content>
      
      
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
   height: 100%;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .fuse{
    width:100%;
    margin-left:5px;
  }
</style>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
    nombre_app: 'Personas-Vue',
    personas:[],
    personas_keys:['cedula','nombre','apellido']

  }),
  created(){

    this.personas=[
      {
        id:1,
        cedula:"1143425146",
        nombre: "Roberto",
        apellido: "Morales",
        sexo: 1,
        nombre_sexo:"Masculino"
      }, {
        id:2,
        cedula:"1145789132",
        nombre: "Carlos",
        apellido: "Perez",
        sexo: 1,
        nombre_sexo:"Masculino"
      }, {
        id:3,
        cedula:"1120578962",
        nombre: "Manuel",
        apellido: "Mejía",
        sexo: 1,
        nombre_sexo:"Masculino"
      }, {
        id:4,
        cedula:"117894556",
        nombre: "Sergio",
        apellido: "Perez",
        sexo: 1,
        nombre_sexo:"Masculino"
      }, {
        id:5,
        cedula:"1178945123",
        nombre: "Andrea",
        apellido: "Parra",
        sexo: 2,
        nombre_sexo:"Femenino"
      }
    ]

  },
  methods:{
    activar_ventana_agregar(){
      EventBus.$emit("activar-ventana-agregar",true);
    },
    results(data){
      EventBus.$emit("buscar-personas",data);
    }
  }
}
</script>