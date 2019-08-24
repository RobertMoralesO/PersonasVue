<template>
  <div>
    <md-dialog :md-active.sync="showDialog" class="md-layout md-scrollbar">
    <form novalidate class="md-layout">
      <md-card>
        <md-card-header>
          <div class="md-title">Ver Persona</div>
        </md-card-header>

        <md-card-content>

       <md-field>
      <label>Cédula</label>
      <md-input v-model="cedula" readonly></md-input>
        </md-field>
        <md-field>
        <label>Nombre</label>
      <md-input v-model="nombre" readonly ></md-input>
        </md-field>
    <md-field>
       <label>Apellido</label>
       <md-input v-model="apellido" readonly></md-input>
      </md-field>
      <md-field>
      <label>Sexo</label>
      <md-input v-model="sexo" readonly></md-input>
      </md-field>

        </md-card-content>

        

        <md-card-actions>
          <md-button class="md-primary" :disabled="sending" @click="showDialog=false">Cerrar</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved"></md-snackbar>
    </form>
    </md-dialog>
  </div>
</template>

<style lang="scss" scoped>
    .md-card{
        width:100%;
        margin-top:10px;
        padding:5px;
    }
        .md-dialog {
    max-width: 768px;
  }
    
</style>
<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
      sexos:[{
          id:1,
          valor:"Masculino"
      },
      {
          id:2,
          valor:"Femenino"
      },
      ],cedula:"",
      nombre:"",
      apellido:"",
      sexo:""
    }),mounted(){
        EventBus.$on('activar-ventana-ver',data =>{
          this.cedula = data.cedula;
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.sexo = data.nombre_sexo;
          this.showDialog=true;
        })
    }
  }
</script>