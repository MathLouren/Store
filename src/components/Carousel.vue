<template>
    <div class="carousel"  @keydown="checkSlide($event)" tabindex="0">
        <slot></slot>
        <div>
            <button @click.prevent="next" class="btn btn-next"><img src="../assets/chevron-left.svg"></button>
        <button @click.prevent="prev" class="btn btn-prev"><img src="../assets/chevron-right.svg"></button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            index : 0,
            slides : [],
            slideDirection: '',
        }
    },
    computed: {
        slidesLength() {
            return this.slides.length;
        }
    },
    mounted(){
        this.slides = this.$children;
        this.slides.map( (slide,index) => {
            slide.index = index;
        });
    },
    methods: {
        next(){
            this.index++;
            if(this.index >= this.slidesLength){
                this.index = 0;
            }
            this.slideDirection = 'slide-right';
        },
        prev(){
            this.index--;
            if(this.index < 0){
                this.index = this.slidesLength - 1;
            }
             this.slideDirection = 'slide-left';
        },
        checkSlide(event){
            if(event.keyCode === 39){
                this.next();
            }else if (event.keyCode === 37){
                this.prev();
            }else {
                return;
            }
        },
    }
}
</script>
<style scoped>


  .carousel {
        position:relative;
        overflow: hidden;
        width: 100%;
        max-width:750px;
        height:500px;
        z-index:10;
        margin: auto;
    }
    .btn {
        padding:5px;
        background-color:rgba(0,0,0,0.7);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        position:absolute;
        margin-top:-30%;
        z-index:2;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
    
</style>