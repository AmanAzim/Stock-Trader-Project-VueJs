<template>
    <div>
        <app-stock v-for="stock in stocks" v-bind:stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {mapGetters} from 'vuex';
    export default {
        components:{
            'app-stock':Stock
        },
        data(){
            return{
            };
        },
        computed:{
            ...mapGetters(['stocks']),
            /*stocks(){
                return this.$store.getters.stocks;
            }*/
        },
    }
</script>

<style scoped>

</style>