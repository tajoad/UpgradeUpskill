<template>
  <section class="signup">
           <!-- <img src="images/signup-bg.jpg" alt=""> -->
           <div class="container">
               <div class="signup-content">
                   <form @submit.prevent="register()" id="signup-form" class="signup-form">
                       <h2 class="form-title">Create account</h2>
                     <div class="form-setup">
                       <div class="form-group" :class="{ error: v$.user.firstName.$errors.length }">
                         <i class="fas fa-user icon"></i>
                           <input v-model="v$.user.firstName.$model" type="text" class="form-input" name="firstname" id="firstname" placeholder="First Name"/>
                       </div>
                       <div class="input-errors" v-for="(error, index) of v$.user.firstName.$errors" :key="index">
                             <div class="error-msg">{{ error.$message }}</div>
                       </div>
                     </div>
                     <div class="form-setup">
                       <div class="form-group" :class="{ error: v$.user.lastName.$errors.length }">
                         <i class="fas fa-user icon"></i>
                           <input v-model="v$.user.lastName.$model" type="text" class="form-input" name="lastname" id="lastname" placeholder="Last Name"/>
                       </div>
                       <div class="input-errors" v-for="(error, index) of v$.user.lastName.$errors" :key="index">
                             <div class="error-msg">{{ error.$message }}</div>
                       </div>
                     </div>

                     <div class="form-setup">
                       <div class="form-group" :class="{ error: v$.user.username.$errors.length }">
                         <i class="fa fa-id-card icon"></i>
                           <input v-model="v$.user.username.$model" type="text" class="form-input" name="username" id="username" placeholder="Username"/>
                       </div>
                       <div class="input-errors" v-for="(error, index) of v$.user.username.$errors" :key="index">
                             <div class="error-msg">{{ error.$message }}</div>
                       </div>
                     </div>

                     <div class="form-setup">
                       <div class="form-group">
                         <i class="fas fa-envelope icon"></i>
                           <input v-model="v$.user.email.$model" type="email" class="form-input" name="email" id="email" placeholder="Email Address"/>
                       </div>
                       <div class="input-errors" v-for="(error, index) of v$.user.email.$errors" :key="index">
                           <div class="error-msg">{{ error.$message }}</div>
                       </div>
                     </div>

                     <div class="form-setup">
                       <div class="form-group" :class="{ error: v$.user.password.$errors.length }">
                         <i class="fas fa-lock icon"></i>
                           <input v-model="v$.user.password.$model" type="password" class="form-input" name="password" id="password" placeholder="Password"/>
                       </div>
                       <div class="input-errors" v-for="(error, index) of v$.user.password.$errors" :key="index">
                             <div class="error-msg">{{ error.$message }}</div>
                       </div>
                     </div>

                     <div class="form-setup">
                       <div class="form-group">
                           <i class="fas fa-key icon"></i>
                           <input v-model="v$.user.confirmPassword.$model" type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password" @input="checkPassword()"/>
                       </div>
                       <div class="input-errors" v-for="(error, index) of v$.user.confirmPassword.$errors" :key="index">
                         <div class="error-msg">{{ error.$message }}</div>
                       </div>
                     </div>

                       <div class="form-group">
                           <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                           <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                       </div>
                       <div class="form-group">
                           <button type="submit" class="form-submit" :disabled="v$.user.$invalid">Sign up</button>
                       </div>
                   </form>
                   <p class="loginhere">
                       Have already an account ? <router-link  class="loginhere-link" to="/"> Login here</router-link>
                   </p>
               </div>
           </div>
       </section>
</template>

<script>   
   import useVuelidate from '@vuelidate/core'
   import BrewMethodsAPI from '../api/resources/BrewMethods';
   import { required, email, minLength, sameAs }  from '@vuelidate/validators'

   const url = "http://localhost:3002/user"

   export function validName(name) {
     let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
     if (validNamePattern.test(name)){
       return true;
     }
     return false;
   }
 
   export default {
       name:"Register",
       setup () {
         return { v$: useVuelidate() }
       },
       data : function() {
           return {
               user: {
                   firstname: "",
                   lastname: "",
                   username: "",
                   email: "",
                   password: ""
               },
               alert: {
                 isAlerted: false,
               }
           }
       },
       validations() {
           return {
             user: {
               firstName: { 
                 required, name_validation: {
                   $validator: validName,
                   $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                 } 
               },
               lastName: { 
                 required, name_validation: {
                   $validator: validName,
                   $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                 } 
               },
               email: { required, email },
               password: { required, min: minLength(6) },
               confirmPassword: { required },
               username: {
                       required,
                       min: minLength(4)
               },
             },
           }
         },
       props: {
           page: {type : String, require :true},
           check: {type : Function, require :true},
       },
       methods : {
           success : function() {
             isAlerted = true
           },
           failed : function() {
             isAlerted = false
           },
           register: async function() {
               const jsonData= JSON.stringify(this.user);  
               const data = await BrewMethodsAPI.store( url, jsonData );
               const sendData = JSON.parse(data);
              this.sendAlert(sendData);
       },
       sendAlert: function(data){
                 if(data.responseCode === 0) {
                 this.$toast.error(data.responseMsg,  {
                                  type: 'error',
                                  position: 'top',
                                  dismissible:false,
                                  max:1
                 });
               } else {
                 this.$toast.success(data.responseMsg,  {
                                  type: 'success',
                                  position: 'top',
                                  dismissible:false,
                                  max:1
                 });
                 setTimeout(function () {
                       location.reload()
                   }, 1000);
               }
       }
     }

   }
</script>

<style>
   @import "../styles/Register.css";
</style>