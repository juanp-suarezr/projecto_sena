<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, onMounted } from "vue";
import PageLayout from '@/Layouts/PageLayout.vue';
import bannerInit from '../../../public/assets/img/bannerInit.jpeg';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import botellas from '../../../public/assets/img/botellas.png';
import madre from '../../../public/assets/img/madre.png';
import correo from '../../../public/assets/img/correo.png';
import imagen1 from '../../../public/assets/img/Dahia y laila.png';
import imagen2 from '../../../public/assets/img/tayecologico.jpg';
import seguroEntrega from '../../../public/assets/img/seguro-de-entrega.png';
import salvePlaneta from '../../../public/assets/img/salve-el-planeta.png';
import perroFeliz from '../../../public/assets/img/perro.png';
import maquinaria from '../../../public/assets/img/madres.png';
import pagos from '../../../public/assets/img/pasarela-de-pago.png';
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

//IMAGEN 
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/categorias/${imageName}`;
};

const form = useForm({
    email: '',
});

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);



</script>

<template>

    <Head title="Conocenos" />

    <PageLayout>

        <div class="container-fluid" style="overflow-x: hidden;">

<!-- banner incial historia -->
<div class="img-100 border1 bg-color1 mt-4 m-0">
    <p class="text-center mt-2">
        <b>
            NUESTRA HISTORIA
        </b>
    </p>


</div>
<!-- inicio con tarjetas de jp y mila, tay y suso -->
<div class="col-md-12 row d-flex mt-5 mb-4 inicio animacion1">
    <div class="col-md-12">
        <p class="text-center">Taysu accesorios nació en el año 2020, por iniciativa de dos jovenes con
            mentalidad emprendedora:</p>
    </div>

    <div class="col-md-6 col-sm-6 col-12 cursor mt-5 px-md-5 px-sm-4">
        <div class="card1 card-front1 bg-color1 radius-5 px-4 py-2 row btnhover" onclick="cardChange(1);">
            <div class="col-md-12">
                <h2 class="text-center">Juan Pablo Suarez Ramirez</h2>
            </div>
            <div class="col-md-8 col-sm-12 col-12 d-flex">
                <p class="px-2 py-2 m-auto">
                    Administrador de empresas, progarmador. Desde muy joven, he tenido una mentalidad
                    emprendedora y una gran pasión por convertir ideas en realidad. Siempre he creído en la
                    importancia de buscar oportunidades, enfrentar desafíos y perseguir mis sueños. Mi mayor
                    inspiración es mi mascota.
                    <br>Clic en la tarjeta para conocer a <b>TAY</b>
                </p>
            </div>
            <div class="col-md-4 col-sm-8 col-8 d-flex mx-auto">
                <img class="img-100 radius-50 border3 my-md-auto my-sm-auto mt-2" src="images/Jp.png">
            </div>

        </div>

        <div class="card1 card-back1 bg-color1 radius-5 px-4 py-2 row btnhover" style="display: none;"
            onclick="cardChange(2);">
            <div class="row d-flex">
                <div class="col-md-12">
                    <h2 class="text-center">Taibron</h2>
                </div>
                <div class="col-md-8 col-sm-12 col-12 d-flex flex-column">
                    <p class="px-2 py-2 m-auto">
                        Mejor conocido como <b>Tay</b>
                        <br>
                        Pastor aleman de 5 años muy loco y a la vez juicioso, duerme y a la
                        vez le gusta correr, ladra y juega, es multifuncional. Pero ante todo es uno de los
                        jefes e
                        inspirador de la marca.
                    </p>
                    <img class="mx-auto mt-2 img-50" src="images/TAY LOGO.png">
                </div>
                <div class="col-md-4 col-sm-6 col-6 d-flex mx-auto">
                    <img class="img-100 radius-50 border3 my-md-auto my-sm-auto mt-2" src="images/tay.png">
                </div>
            </div>


        </div>

    </div>

    <div class="col-md-6 col-sm-6 col-12 cursor mt-5 px-md-5 px-sm-4">
        <div class="card1 card-front2 bg-color1 radius-5 px-4 py-2 row btnhover" onclick="cardChange(3);">
            <div class="col-md-12">
                <h2 class="text-center">María Camila Vasquez Pínzon</h2>
            </div>
            <div class="col-md-8 col-sm-12 col-12 d-flex">
                <p class="px-2 py-2 m-auto">
                    Administradora de empresas, cofundadora de Taysu accesorios, apasionada por desarrollar
                    nuevas ideas, en mis 23 años siempre he tenido la oportunidad de crear manualidades e
                    iniciar proyectos que me han ayudado a crecer como persona, en Taysu mi inspiración es
                    mi mascota que me ha acompañado por 12 años.
                    <br>Clic en la tarjeta para conocer a <b>SUSO</b>
                </p>
            </div>
            <div class="col-md-4 col-sm-8 col-8 d-flex mx-auto">
                <img class="img-100 radius-50 border3 my-md-auto my-sm-auto mt-2" src="images/mila y suso.jpg">
            </div>

        </div>

        <div class="card1 card-back2 bg-color1 radius-5 px-4 py-2 row btnhover" style="display: none;"
            onclick="cardChange(4);">
            <div class="row d-flex">
                <div class="col-md-12">
                    <h2 class="text-center">Suso</h2>
                </div>
                <div class="col-md-8 col-sm-12 col-12 d-flex flex-column">
                    <p class="px-2 py-2 m-auto">
                        Criollito con delirios de niño, esta en su etapa de adulto adolescente, con 12 años ha
                        viajado, su hobby es dormir y comer, se enoja con Camila y le da órdenes para que todo
                        en Taysu salga bien
                    </p>
                    <img class="mx-auto mt-2 img-50" src="images/SUSO LOGO.png">
                </div>
                <div class="col-md-4 col-sm-4 col-6 d-flex mx-auto">
                    <img class="img-100 radius-50 border3 my-md-auto my-sm-auto mt-2" src="images/suso.png">
                </div>
            </div>


        </div>

    </div>

</div>
<!-- logo -->
<div class="col-md-6 col-sm-8 col-12 animacion1 d-flex mt-8 mt-5 mx-auto" id="parte1">
    <img class="img-100 m-auto" src="images/TAYSU LOGO REGISTRADO.png">
</div>
<!-- Taysu historia -->
<div class="col-md-12 row d-flex mx-auto animacion1 mt-5" id="parte2">
    <div class="col-md-6 col-sm-6 col-12 d-flex flex-column">
        <svg class="mx-auto img-100">
            <line x1="50%" y1="0" x2="45%" y2="100" stroke="#ECC084" stroke-width="5px" stroke-dasharray="12" />
        </svg>
        <p>Si es correcto, así como <b class="color1">TAY</b> y <b class="color1">SU</b>SO son los CEO, tambien
            son los que inspiran y ayudan
            a generar la magia en TAYSU, Un emprendimiento de moda sostenible que se enfoca en dar amor y estilo
            a las mascotas.
        </p>
    </div>

    <div class="col-md-6 col-sm-6 col-12 d-flex row mt-md-5 mt-sm-5">
        <div class="col-md-6 col-sm-6 col-6 mx-auto">
            <svg class="mx-auto img-100 mt-5">
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ECC084" stroke-width="5px"
                    stroke-dasharray="12" />
            </svg>
            <svg class="mx-auto img-100 marginMenos50">
                <line x1="98%" y1="0" x2="98%" y2="200" stroke="#ECC084" stroke-width="5px"
                    stroke-dasharray="12" />
            </svg>
        </div>
        <div class="col-md-6 col-sm-6 col-6">
            <img class="img-100 mx-auto" src="gif/tay.gif">
        </div>

        <div class="col-md-6 col-sm-6 col-6">
            <img class="img-100 mx-auto" src="gif/suso.gif">
        </div>


    </div>
</div>
<!-- porque es exclusivo -->
<div class="col-md-12 d-flex flex-column mx-auto animacion1 mt-5" id="parte3">
    <h2 class="text-center">¿PORQUE ES EXCUSIVO?</h2>

    <!-- card2 -->
    <div class="col-md-12 row mt-2 d-flex">
        <div class="col-md-3 col-sm-4 col-5 m-auto d-flex">

            <img src="images/parque.png" alt="" class="img-70 m-auto py-4">
        </div>
        <div class="col-md-9 col-sm-8 m-auto">
            <div class="card2">
                <p>
                    Solo sacamos 12 unidades de un diseño de pañoletas, por lo que es muy poco probable que tu
                    mascota tenga la misma pañoleta que otra mascota en el parque.
                </p>
            </div>
        </div>
    </div>

    <!-- card2 -->
    <div class="col-md-12 row mt-2 d-flex">

        <div class="col-md-9 col-sm-8 m-auto">
            <div class="card2">
                <p>
                    Productos diferentes, unicos e innovadores que solo veras en taysu. Ademas podemos
                    transformar tus ideas en magia y personalizar a tu gusto
                </p>
            </div>
        </div>
        <div class="col-md-3 col-sm-4 col-5 m-auto d-flex">
            <div class="radius-50 d-flex m-auto bg-color1">
                <img src="images/sullyvan.png" alt="" class="img-90 m-auto py-3 radius-50">
            </div>

        </div>
    </div>

</div>
<!-- porque es sostenible -->
<div class="col-md-12 d-flex flex-column mx-auto mt-5 mb-2">
    <h2 class="text-center animacion1" id="parte4">¿PORQUE ES MODA SOSTENIBLE?</h2>

    <div class="col-md-12 col-sm-12 col-12 d-flex row animacion1" id="parte5">
        <div class="col-md-6 col-sm-8 col-9 m-auto mt-5">
            <p class="px-md-4">
                Nuestros productos son hechos 100% a mano y con mucho amor, por mujeres y madres cabeza de
                familia
            </p>
        </div>
        <div class="col-md-2 col-sm-4 col-3 d-flex">
            <img class="my-auto" src="images/amar.png" style="right: 0;">
        </div>
    </div>

    <div class="col-md-12 col-sm-12 col-12 d-flex row animacion1 mt-5" id="parte6">

        <div class="col-md-9 col-sm-8 col-10 m-auto mt-5">
            <!-- card2 -->
            <div class="col-md-12 row d-flex">
                <div class="col-md-3 col-sm-4 col-5 m-auto d-flex">

                    <img src="images/empaque.jpg" alt="" class="img-70 m-auto radius-50">
                </div>
                <div class="col-md-9 col-sm-10 m-auto">
                    <div class="card2">
                        <p>
                            Nuestro empaque es super bonito y funcional para guardar cositas y reutilizarlo
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-3 col-sm-2 col-2 d-flex">
            <img class="widthImg1 my-auto" src="images/empaque1.png" style="right: 0;">
        </div>

    </div>

    <div class="col-md-12 col-sm-12 col-12 d-flex row animacion1 mt-5 ps-0" id="parte7">

        <div class="col-md-2 col-sm-4 col-3 ps-0 d-flex">
            <img class="my-auto widthImg1" src="images/botella-de-plastico.png" style="margin-left: -150pt;">
        </div>
        <div class="col-md-6 col-sm-8 col-9 m-auto mt-5">
            <p class="px-md-4">
                Las pañoletas y corbatines se fabrican a traves de la transformación del plastico de botellas pet a tela, así cuidando el medio ambiente y dando amor y estilo a tu peludito
            </p>
        </div>
        
    </div>

</div>



</div>


    </PageLayout>

</template>
