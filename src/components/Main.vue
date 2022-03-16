<template>
    <section>
        <Search />
        <carousel>
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </section>    
</template>

<script>
import Search from "@/components/Search.vue"
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide';

export default {
    data(){
        return {
            slides: [
                'https://picsum.photos/id/230/800/300',
                'https://picsum.photos/id/231/600/300',
                'https://picsum.photos/id/232/600/300',
                'https://picsum.photos/id/233/600/300',
                'https://picsum.photos/id/234/600/300',
                'https://picsum.photos/id/235/600/300',
                'https://picsum.photos/id/236/600/300',
            ],
        }
    },
    components : {
        Carousel,
        CarouselSlide,
        Search
    }
}
</script>

<style>

section{
    display: flex;
    flex-direction: column;
}

</style>