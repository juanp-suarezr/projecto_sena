<template>

    <div class="flex flex-col overflow-x-hidden bg-light">

        <nav class="w-full h-full bg-primary py-2 text-xl sm:text-2xl z-10">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex w-full justify-between items-center">
                    <div class="flex-shrink-0 w-1/4 p-4">
                        <a href="/" class="text-white text-2xl font-semibold">
                            <figure>
                                <img class="w-full sm:w-1/2" :src="logo" alt="imagen de logo"
                                    title="¡Hola! ¿Eres nuevo por aquí? Me encanta conocer gente nueva.">
                                <figcaption lang="es" class="hidden">Esta es una imagen del logo de taysu
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div class="hidden md:block">
                        <ul class="flex space-x-4">
                            <li><a :href="route('about')" :class="{ 'underline': route().current('about') }"
                                    class="text-dark cursor border-r-2 border-dark pe-2 hover:underline">Productos</a></li>
                            <li><a :href="route('about')" :class="{ 'underline': route().current('conocenos') }"
                                    class="text-dark cursor border-r-2 border-dark pe-2 hover:underline">conócenos</a></li>

                            <li><a :href="route('register')" :class="{ 'underline': route().current('register') }"
                                    v-tooltip.top="{ value: 'Guia de tallas', autoHide: false }"
                                    class="text-dark cursor hover:underline border-r-2 border-dark pe-2">Guía de tallas</a></li>
                            <li><a :href="route('login')" :class="{ 'underline': route().current('login') }"
                                    class="text-dark cursor hover:underline">carrito</a></li>
                        </ul>
                    </div>
                    <div class="md:hidden">
                        <!-- Mobile menu button -->
                        <button class="text-white hover:text-white focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <main class="flex-1 overflow-y-auto overflow-x-hidden bg-light text-black">

            <slot />

        </main>

        <footer class="px-2 bg-dark text-white flex flex-col py-6">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center flex-shrink-0 mr-6">
                    <h2 class="text-xl sm:text-2xl font-bold">TAYSU</h2>
                </div>
                <!-- Redes Sociales -->
                <div class="flex justify-center items-center space-x-4">
                    <a href="#" target="_blank" class="text-white hover:text-gray-400 transition duration-300">
                        <font-awesome-icon :icon="faInstagram" size="xl" />
                    </a>
                    <a href="#" target="_blank" class="text-white hover:text-gray-400 transition duration-300">
                        <font-awesome-icon :icon="faFacebook" size="xl" />
                    </a>
                    <a href="#" target="_blank" class="text-white hover:text-gray-400 transition duration-300">
                        <font-awesome-icon :icon="faWhatsapp" size="xl" />
                    </a>

                </div>

                <div>
                    <a href="#inicio" class="text-white hover:text-gray-400 transition duration-300">
                        <ArrowUpCircleIcon class="w-12 animate-bounce" />
                    </a>
                </div>
            </div>
            <div class="container mt-8 flex justify-center md:ms-36">
                <a class="flex justify-center" href="#" target="_blank">
                    Creado por <strong> &copy; Taytech</strong>
                </a>
            </div>
        </footer>


    </div>
</template>

<script setup>
import logo from '../../../public/assets/img/TAYSU LOGO REGISTRADO.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



AOS.init();

</script>

<style>
body {
  font-family: "Public Sans", sans-serif;
  font-size: 12pt;
  min-height: 100%;
  text-align: justify;
  min-width: 100%;
  overflow-x: hidden !important;
}

</style>
