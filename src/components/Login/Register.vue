<template>
    <h1>Create an account</h1>
    <p><input type="text" placeholder="email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><button @click="register">Register</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const email = ref("");
const password = ref("");

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() =>{
        console.log('logged in ');
    })
}
</script>