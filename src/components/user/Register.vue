

<template>
  <div id="registerLogin" class="container-fluid">
      <div class="row">
        <div class="col-12">
          <header>
              <img alt="Vue logo" class="logo" src="@/assets/img/logo-noodo.png"  />

          </header>
        </div>
        <div class="col-12">
          <div class="container">

            <div class="row">
              <div class="col-md-6">

                <h1>Crear cuenta</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum laborum recusandae vel odio quia molestias molestiae</p>
                
                <!-- Login Form    v-on:submit.prevent="login"        -->
                <form >
                  <input type="text" id="login" class="fadeIn second" name="login" placeholder="E-mail" v-model="email" :rules="[/* val => inValidEmail(val) */]">
                  <input type="password" id="password" class="fadeIn third" name="login" placeholder="Contraseña" v-model="password">
                  <span  @click="pass1('password')">
                    <i class="fas fa-light fa-eye"></i>
                  </span>
                  <input type="password" id="password2" class="fadeIn third" name="login" placeholder="Repetir contraseña" v-model="password2">
                  <span  @click="pass1('password2')">
                    <i class="fas fa-light fa-eye"></i>
                  </span>
                  <label for="terms">
                    <input type="checkbox" @click="checkbox" name="terms" id="terms" v-model="checkbox"> 
                     Al registrar una cuenta confirmas que conoces y aceptas nuestros Términos y condiciones y Políticas de privacidad
                    </label>
                  <button :disabled="checked">Regístrame</button>
                </form>

                <p style="text-align: center;">
                  ¿Ya tienes cuenta? <b><RouterLink to="/login">Ingresar</RouterLink></b>
                </p>
                
                <!--    Remind Passowrd
                  <div class="alert alert-danger" role="alert" v-if="error">
                    {{error_msg}}
                  </div> -->
                  
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
    <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const checked = ref(true);

const checkbox = () => {
  checked.value = !checked.value;
}

const pass1 = (id) => {
    const pass = document.getElementById(id);
    if(pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
}

</script> 

<!--
  

  /*   import axios from 'axios';
  export default {
    name: 'Home',
    components: {
    },
    data: function(){
      return {
        email: "",
        password: "",
        password2: "",
        error: false,
        error_msg: "",
      }
    },
    methods:{
      login(){
          let json = {
            "email" : this.email,
            "password": this.password,
            "password2": this.password2
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
      },
      isValidEmail( val ) {
          const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
          return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword(val) {
        return (val === this.password)
      }
    }
  } */
 -->