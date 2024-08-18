<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, onMounted, inject} from "vue";
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

const swal = inject('$swal');

defineProps({

    categorias: {
        type: Object,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    user: {
        type: Object,
    },
});


//IMAGEN 
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/categorias/${imageName}`;
};

const form = useForm({
    correo: '',
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

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', ''); // Agrega el atributo data-use-service-core
    script.defer = true; // Agrega el atributo defer
    document.head.appendChild(script);
});

//suscribir correo
const submit = () => {
    form.post(route('suscripcion'), {
        onSuccess: function () {

            swal({
                title: "Registro Guardado",
                text: "El correo se ha registrado exitosamente, ahora eres cliente registrado de taysu",
                icon: "success"
            })
        }
    });
};

</script>

<template>

    <Head title="Home" />

    <PageLayout>

        <!-- Banner de pantalla completa -->
        <div id="inicio" class="w-full h-screen flex flex-col justify-center overflow-hidden">
            <figure class="object-cover h-full">
                <img class="w-full object-cover mt-0" :src="bannerInit"
                    alt="imagen banner inicial accesorios para mascotas" title="Taysu familia">
                <figcaption lang="es" class="hidden">Esta es una imagen banner mostrando los productos o accesorios que
                    ofrece taysu para los peluditos o mascotas.
                </figcaption>
            </figure>



        </div>

        <!-- info descuentos -->
        <div class="sm:w-2/6 sm:mt-[-35%] mt-[-400px] sm:mb-24 lg:mb-36 mx-auto sm:mx-0 flex justify-center">
            <div class="w-full sm:px-12 sm:py-6 p-6 flex inline-flex flex-col rounded-full bg-light">
                <p class="mx-auto text-dark p-6">
                    UNETE A LA TAYSU FAMILIA Y
                    RECIBE UN 10% DE DESCUENTO
                    EN TU PRIMER COMPRA
                </p>
                <button class="bg-secondary p-2 rounded-md mx-auto cursor">
                    <a class="text-decoration-none text-light" href="#parte3">
                        <p>Unirme</p>
                    </a>
                </button>
            </div>
        </div>

        <div class="w-full overflow-hidden mt-6 lg:pt-12 mx-auto sm: px-8 px-4">

            <!-- info pañoletas -->
            <div class="sm:grid grid-cols-2 gap-4 mt-12 w-full" id="parte1" data-aos="fade-up">
                <div class="w-full m-auto flex flex-col p-0">

                    <!-- pañoletas - plastico -->
                    <div class="w-[80%] flex">
                        <div class="w-[80%]">
                            <p class="sm:text-xl">
                                <b>PAÑOLETAS</b>
                                <br>
                                Hechas con plastico
                                reciclado
                            </p>
                        </div>
                        <div class="">
                            <figure>
                                <img class="w-full h-full cover" :src="botellas" alt="icono de botellas"
                                    title="accesorios con botellas de plastico">
                                <figcaption lang="es" class="hidden">Es un icono de botellas de plastico
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <!-- Madres cabeza familia-->
                    <div class="flex grid grid-cols-4 mt-4 sm:ps-12 w-full">
                        <div class="col-span-3">
                            <p class="sm:text-xl w-full">
                                <b>TRABAJANDO</b>
                                <br>
                                Con madres cabeza de familia
                            </p>
                        </div>
                        <div class="col-span-1 align-items-starp">
                            <figure>
                                <img class="w-full cover" :src="madre" alt="imagen de madre con niños">
                                <figcaption lang="es" class="hidden">Es un icono de madre
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <!-- ENVIO -->
                    <div class="w-[80%] grid grid-cols-4 mt-4">
                        <div class="col-span-2 sm:col-span-3">
                            <p class="sm:text-xl w-full">
                                <b>ENVIOS A TODA COLOMBIA</b>
                                <br>
                                Llenando de amor a todos los peluditos
                            </p>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <figure>
                                <img class="w-full cover" :src="correo" alt="imagen de envio de paquetes">
                                <figcaption lang="es" class="hidden">Es un icono de correo
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </div>
                <!-- imagenes -->
                <div class="w-full m-auto grid grid-cols-2 gap-4">

                    <div class="col-1"></div>
                    <div class="w-full">
                        <figure>
                            <img class="w-full cover" :src="imagen1"
                                alt="imagen de clientes de taysu accesorios de paquetes">
                            <figcaption lang="es" class="hidden">Es una imagen de clientes de taysu con pañoleta.
                            </figcaption>
                        </figure>
                    </div>

                    <div class="w-full">
                        <figure>
                            <img class="w-full cover" :src="imagen2"
                                alt="imagen de clientes de taysu accesorios de paquetes">
                            <figcaption lang="es" class="hidden">Es una imagen de clientes de taysu con pañoleta.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <!-- Categorias productos -->
            <div class="card mt-12" data-aos="fade-up">
                <Carousel :value="categorias" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div
                            class="flex flex-col my-auto border-2 border-gray-200 surface-border shadow-xl rounded-md sm:m-2 p-3">
                            <div class="mb-3">
                                <div class="relative mx-auto">
                                    <img :src="getImageUrl(slotProps.data.imagen)" :alt="slotProps.data.nombre"
                                        class="w-full rounded-md !h-[40vh]" />
                                    <Tag :value="slotProps.data.nombre"
                                        class="absolute bg-option1 text-base sm:text-xl text-white"
                                        style="left:5px; top: 5px" />
                                </div>
                            </div>
                            <div class="mb-3 font-medium">{{ slotProps.data.descripcion }}</div>
                            <div class="flex justify-content-between align-items-center">

                                <span>
                                    <a>
                                        Ver productos
                                    </a>
                                </span>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>

            <!-- invitacion unirse a comunidad -->
            <div class="w-full mt-4">
                <div class="border-2 border-black bg-primary mt-6 m-0" id="parte3">
                    <p class="text-center text-sm sm:text-2xl mt-4 px-2">
                        <b>
                            UNETE A LA TAYSU FAMILIA Y RECIBE EL 10% DE DESCUENTO EN TU PRIMERA COMPRA
                        </b>
                    </p>
                    <form @submit.prevent="submit" class="mx-auto text-center mt-4 p-4 sm:flex justify-center w-full gap-6">
                        <div class="sm:w-1/2">
                            <InputLabel for="email" value="Correo electrónico" />
                            <TextInput id="email" type="email" class="mt-1 block mx-auto" v-model="form.correo" required
                                autocomplete="username" />
                            <InputError class="mt-2" :message="form.errors.correo" />
                        </div>


                        <PrimaryButton class="mt-4 !bg-secondary" :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing">
                            Registrar correo
                        </PrimaryButton>
                    </form>


                </div>
            </div>

            <!-- porque comprar -->
            <div class="w-full mt-6 mb-2" id="parte4" data-aos="fade-up">
                <h2 class="text-center text-4xl text-secondary"><b>COMPRA CON TAYSU</b></h2>

                <!-- argumentos pa comprar -->
                <div class="mt-4 flex justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:px-6">
                    <!-- envio seguro -->
                    <div class="mb-4">
                        <img class="w-full" :src="seguroEntrega">
                        <div class="rounded-md bg-primary px-2 py-2 flex mt-2">
                            <p class="m-auto text-center text-peq">Envios seguros</p>
                        </div>

                    </div>
                    <!-- Exclusividad -->
                    <div class="mb-4">
                        <img class="img-100" :src="perroFeliz">
                        <div class="rounded-md bg-primary px-2 py-2 flex mt-2">
                            <p class="m-auto text-center text-peq">Exclusividad para tu mascota</p>
                        </div>

                    </div>
                    <!-- Madres cabeza -->
                    <div class="mb-4">
                        <img class="img-100" :src="maquinaria">
                        <div class="rounded-md bg-primary px-2 py-2 flex mt-2">
                            <p class="m-auto text-center text-peq">Apoyo a las madres trabajadoras</p>
                        </div>

                    </div>
                    <!-- Medio ambiente -->
                    <div class="mb-4">
                        <img class="img-100" :src="salvePlaneta">
                        <div class="rounded-md bg-primary px-2 py-2 flex mt-2">
                            <p class="m-auto text-center text-peq">Cuidado del medio ambiente</p>
                        </div>

                    </div>
                    <!-- Pagos -->
                    <div class="mb-4">
                        <img class="img-100" :src="pagos">
                        <div class="rounded-md bg-primary px-2 py-2 flex mt-2">
                            <p class="m-auto text-center text-peq">Pagos seguros</p>
                        </div>

                    </div>
                </div>

            </div>
            <!-- instagram -->
            <div class="col-md-12 mt-6 animacion" id="parte5">
                <h2>
                    <p class="text-center text-4xl text-secondary">
                        <b>SIGUENOS EN INSTAGRAM</b>
                    </p>
                </h2>

                <!-- LightWidget WIDGET -->

                <div class="elfsight-app-8c598639-397d-43a0-a4d3-5e7ec89cd491" data-elfsight-app-lazy></div>


            </div>



        </div>


    </PageLayout>

</template>
