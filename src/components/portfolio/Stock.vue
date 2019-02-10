<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}} <small>(Price:{{stock.price}} | Quantity:{{stock.quantity}} )</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control" type="number" placeholder="Quantity" v-model="sellQuantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" v-on:click="sellStock" :disabled="sellQuantity<=0 && !Number.isInteger(sellQuantity) ">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        props:['stock'],
        data(){
            return{
                sellQuantity:0,
            };
        },
        methods:{
            ...mapActions({
                placeSellOrder:'sellStock'
            }),
            sellStock(){
                const order={
                    stockId:this.stock.id,
                    stockPrice:this.stock.price,
                    stockQuantity:this.sellQuantity
                };
                this.placeSellOrder(order);
                this.sellQuantity=0;
            }
        },
    }
</script>

<style scoped>

</style>