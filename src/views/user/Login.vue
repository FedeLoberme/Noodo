<template>
    <div class="home">
        <div class="wrapper fadeInDown">
                <div id="formContent">
                  <!-- Tabs Titles -->
  
                  <!-- Icon -->
                  <div class="fadeIn first">
                    <img src="@/assets/logo.png" id="icon" alt="User Icon" />
                  </div>
  
                  <!-- Login Form -->
                  <form v-on:submit.prevent="login">
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="usuario">
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
                    <input type="submit" class="fadeIn fourth" value="Log In">
                  </form>
  
                  <!-- Remind Passowrd -->
                  <div class="alert alert-danger" role="alert" v-if="error">
                     {{error_msg}}
                  </div>
  
                </div>
              </div>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Home',
    components: {
    },
    data: function(){
      return {
        usuario: "",
        password: "",
        error: false,
        error_msg: "",
      }
    },
    methods:{
      login(){
          let json = {
            "usuario" : this.usuario,
            "password": this.password
          };
          axios.post('http://solodata.es/auth', json)
          .then( data =>{
             if(data.data.status == "ok"){
               localStorage.token = data.data.result.token;
               this.$router.push('dashboard');
             }else{
               this.error = true;
               this.error_msg = data.data.result.error_msg;
             }
          })
      }
    }
  }
  </script>