<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, onMounted } from "vue";
import PageLayout from '@/Layouts/PageLayout.vue';
import bannerInit from '../../../public/assets/img/bannerInit.jpeg';

import tay from '../../../public/assets/img/Tay.png';
import tayLogo from '../../../public/assets/img/TAY LOGO.png';
import susoLogo from '../../../public/assets/img/SUSO LOGO.png';
import imagen1 from '../../../public/assets/img/Jp.png';
import imagen2 from '../../../public/assets/img/mila y suso.jpg';
import suso from '../../../public/assets/img/suso.png';
import logo from '../../../public/assets/img/TAYSU LOGO REGISTRADO.png';
import tayGif from '../../../public/assets/gif/tay.gif';
import susoGif from '../../../public/assets/gif/suso.gif';
import parque from '../../../public/assets/img/parque.png';
import sullyvan from '../../../public/assets/img/sullyvan.png';
import amar from '../../../public/assets/img/amar.png';
import empaque from '../../../public/assets/img/empaque.jpg';
import empaque1 from '../../../public/assets/img/empaque1.png';
import botellas from '../../../public/assets/img/botella-de-plastico.png';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

defineProps({

    categorias: {
        type: Object,
    },
    
});





</script>

<template>

    <Head title="Conocenos" />

    <PageLayout>
    <div class="container-fluid overflow-x-hidden">
        <!-- banner inicial historia -->
        <div class="w-full border bg-color1 mt-4">
            <p class="text-center mt-2 font-bold">NUESTRA HISTORIA</p>
        </div>
        
        <!-- inicio con tarjetas de jp y mila, tay y suso -->
        <div class="flex flex-wrap justify-center mt-5 mb-4 animacion1">
            <div class="w-full">
                <p class="text-center">Taysu accesorios nació en el año 2020, por iniciativa de dos jóvenes con mentalidad emprendedora:</p>
            </div>

            <div class="w-full md:w-1/2 cursor mt-5 px-5">
                <div class="card1 card-front1 bg-color1 rounded-lg px-4 py-2 flex flex-col items-center btnhover" onclick="cardChange(1);">
                    <h2 class="text-center">Juan Pablo Suarez Ramirez</h2>
                    <div class="flex flex-col md:flex-row">
                        <p class="px-2 py-2 m-auto">
                            Administrador de empresas, programador. Desde muy joven, he tenido una mentalidad emprendedora y una gran pasión por convertir ideas en realidad. Siempre he creído en la importancia de buscar oportunidades, enfrentar desafíos y perseguir mis sueños. Mi mayor inspiración es mi mascota.
                            <br>Clic en la tarjeta para conocer a <b>TAY</b>
                        </p>
                        <img class="w-24 h-24 rounded-full border my-2 mx-auto" :src="imagen1">
                    </div>
                </div>

                <div class="card1 card-back1 bg-color1 rounded-lg px-4 py-2 flex flex-col items-center btnhover" style="display: none;" onclick="cardChange(2);">
                    <h2 class="text-center">Taibron</h2>
                    <div class="flex flex-col md:flex-row">
                        <p class="px-2 py-2 m-auto">
                            Mejor conocido como <b>Tay</b><br>
                            Pastor alemán de 5 años muy loco y a la vez juicioso, duerme y a la vez le gusta correr, ladra y juega, es multifuncional. Pero ante todo es uno de los jefes e inspirador de la marca.
                        </p>
                        <img class="w-24 h-24 rounded-full border my-2 mx-auto" :src="tay">
                    </div>
                    <img class="w-12 h-12 mx-auto mt-2" :src="tayLogo">
                </div>
            </div>

            <div class="w-full md:w-1/2 cursor mt-5 px-5">
                <div class="card1 card-front2 bg-color1 rounded-lg px-4 py-2 flex flex-col items-center btnhover" onclick="cardChange(3);">
                    <h2 class="text-center">María Camila Vasquez Pínzon</h2>
                    <div class="flex flex-col md:flex-row">
                        <p class="px-2 py-2 m-auto">
                            Administradora de empresas, cofundadora de Taysu accesorios, apasionada por desarrollar nuevas ideas, en mis 24 años siempre he tenido la oportunidad de crear manualidades e iniciar proyectos que me han ayudado a crecer como persona. En Taysu mi inspiración es mi mascota que me ha acompañado por 12 años.
                            <br>Clic en la tarjeta para conocer a <b>SUSO</b>
                        </p>
                        <img class="w-24 h-24 rounded-full border my-2 mx-auto" :src="imagen2">
                    </div>
                </div>

                <div class="card1 card-back2 bg-color1 rounded-lg px-4 py-2 flex flex-col items-center btnhover" style="display: none;" onclick="cardChange(4);">
                    <h2 class="text-center">Suso</h2>
                    <div class="flex flex-col md:flex-row">
                        <p class="px-2 py-2 m-auto">
                            Criollito con delirios de niño, está en su etapa de adulto adolescente, con 12 años ha viajado, su hobby es dormir y comer, se enoja con Camila y le da órdenes para que todo en Taysu salga bien.
                        </p>
                        <img class="w-24 h-24 rounded-full border my-2 mx-auto" :src="suso">
                    </div>
                    <img class="w-12 h-12 mx-auto mt-2" :src="susoLogo">
                </div>
            </div>
        </div>

        <!-- logo -->
        <div class="flex justify-center mt-8">
            <img class="w-full md:w-1/2 mx-auto animacion1" :src="logo">
        </div>

        <!-- Taysu historia -->
        <div class="flex flex-wrap justify-center mt-5 animacion1">
            <div class="w-full md:w-1/2 flex flex-col items-center">
                <svg class="w-full">
                    <line x1="50%" y1="0" x2="45%" y2="100" stroke="#ECC084" stroke-width="5px" stroke-dasharray="12" />
                </svg>
                <p>Si es correcto, así como <b class="text-color1">TAY</b> y <b class="text-color1">SU</b>SO son los CEO, también son los que inspiran y ayudan a generar la magia en TAYSU, un emprendimiento de moda sostenible que se enfoca en dar amor y estilo a las mascotas.</p>
            </div>

            <div class="w-full md:w-1/2 flex flex-wrap mt-5">
                <div class="w-1/2 flex justify-center">
                    <svg class="w-full mt-5">
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ECC084" stroke-width="5px" stroke-dasharray="12" />
                    </svg>
                    <svg class="w-full -mt-12">
                        <line x1="98%" y1="0" x2="98%" y2="200" stroke="#ECC084" stroke-width="5px" stroke-dasharray="12" />
                    </svg>
                </div>
                <div class="w-1/2 flex justify-center">
                    <img class="w-24 mx-auto" :src="tayGif">
                </div>
                <div class="w-1/2 flex justify-center">
                    <img class="w-24 mx-auto" :src="susoGif">
                </div>
            </div>
        </div>

        <!-- porque es exclusivo -->
        <div class="flex flex-col items-center mt-5 animacion1">
            <h2 class="text-center">¿POR QUÉ ES EXCLUSIVO?</h2>

            <!-- card2 -->
            <div class="flex flex-wrap mt-2">
                <div class="w-full md:w-1/4 flex justify-center">
                    <img :src="parque" alt="" class="w-3/4 py-4">
                </div>
                <div class="w-full md:w-3/4 flex justify-center">
                    <div class="card2">
                        <p>Solo sacamos 12 unidades de un diseño de pañoletas, por lo que es muy poco probable que tu mascota tenga la misma pañoleta que otra mascota en el parque.</p>
                    </div>
                </div>
            </div>

            <!-- card2 -->
            <div class="flex flex-wrap mt-2">
                <div class="w-full md:w-3/4 flex justify-center">
                    <div class="card2">
                        <p>Productos diferentes, únicos e innovadores que solo verás en Taysu. Además podemos transformar tus ideas en magia y personalizar a tu gusto.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/4 flex justify-center">
                    <div class="rounded-full bg-color1 flex justify-center items-center w-24 h-24">
                        <img :src="sullyvan" alt="" class="w-20 h-20 rounded-full py-3">
                    </div>
                </div>
            </div>
        </div>

        <!-- porque es sostenible -->
        <div class="flex flex-col items-center mt-5 mb-2">
            <h2 class="text-center animacion1">¿POR QUÉ ES MODA SOSTENIBLE?</h2>

            <div class="flex flex-wrap mt-5 animacion1">
                <div class="w-full md:w-1/2 flex justify-center">
                    <p class="px-4">Nuestros productos son hechos 100% a mano y con mucho amor, por mujeres y madres cabeza de familia.</p>
                </div>
                <div class="w-full md:w-1/6 flex justify-center">
                    <img class="my-auto" :src="amar">
                </div>
            </div>

            <div class="flex flex-wrap mt-5 animacion1">
                <div class="w-full md:w-3/4 flex justify-center">
                    <div class="card2">
                        <p>Nuestro empaque es súper bonito y funcional para guardar cositas y reutilizarlo.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/4 flex justify-center">
                    <img class="w-20 h-20 rounded-full py-3" :src="empaque">
                </div>
                <div class="w-full md:w-1/12 flex justify-center">
                    <img class="w-1/2" :src="empaque1">
                </div>
            </div>

            <div class="flex flex-wrap mt-5 animacion1">
                <div class="w-full md:w-1/6 flex justify-center">
                    <img class="w-1/2" :src="botellas" style="margin-left: -150pt;">
                </div>
                <div class="w-full md:w-1/2 flex justify-center">
                    <p class="px-4">Las pañoletas y corbatines se fabrican a través de la transformación del plástico de botellas PET a tela, así cuidando el medio ambiente y dando amor y estilo a tu peludito.</p>
                </div>
            </div>
        </div>
    </div>
</PageLayout>


</template>
