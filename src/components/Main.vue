<template>
    <section>
        <Search />
        <carousel>
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
        <section>
            <Produtos />
        </section>
    </section>    
</template>

<script>
import Search from "@/components/Search.vue"
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide';
import Produtos from "@/components/Produtos.vue"

export default {
    data(){
        return {
            slides: [
                'https://picsum.photos/id/230/800/300',
                'https://picsum.photos/id/231/800/300',
                'https://picsum.photos/id/232/800/300',
                'https://picsum.photos/id/233/800/300',
                'https://picsum.photos/id/234/800/300',
                'https://picsum.photos/id/235/800/300',
                'https://picsum.photos/id/236/800/300',
            ],
        }
    },
    components : {
        Carousel,
        CarouselSlide,
        Search,
        Produtos
    }
}
</script>

<style>

section{
    display: flex;
    flex-direction: column;
}

</style>