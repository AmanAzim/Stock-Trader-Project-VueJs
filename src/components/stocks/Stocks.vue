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
               /* stocks:[  {id:1, name:'BMW', price:110},
                    {id:2, name:'Google', price:200},
                    {id:3, name:'Apple', price:250},
                    {id:4, name:'Twitter', price:8}]*/
            };
        },
        computed:{
            ...mapGetters(['stocks']),
            /*stocks(){
                return this.$store.getters.stocks;
            }*/
        }
    }
</script>

<style scoped>

</style>