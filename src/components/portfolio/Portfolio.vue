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
        computed:{
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
    }
</script>

<style scoped>

</style>