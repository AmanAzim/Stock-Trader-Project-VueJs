<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}} <small>(Price:{{stock.price}} | Quantity:{{stock.quantity}} )</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control" type="number" placeholder="Quantity"  @input="checkStockQuantity"  :class="{danger:!sufficient_StockQuantity}" v-model="sellQuantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" v-on:click="sellStock" :disabled="(sellQuantity<=0 || !sufficient_StockQuantity)">{{sufficient_StockQuantity ? 'Sell':'Not enough'}}</button>
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
                sufficient_StockQuantity:true,
            };
        },
        methods:{
            ...mapActions({
                placeSellOrder:'sellStock'
            }),
            checkStockQuantity(){
               /* const currentStocks=this.$store.getters.stockPortfolio;
                const record=currentStocks.find(elem=>elem.id==this.stock.id);
                //console.log(record.quantity);

                if(record.quantity >= this.sellQuantity)
                {
                    this.sufficient_StockQuantity=true;
                }else{
                    this.sufficient_StockQuantity=false;
                } */
                if(this.stock.quantity >= this.sellQuantity)
                {
                    this.sufficient_StockQuantity=true;
                }else{
                    this.sufficient_StockQuantity=false;
                }
            },
            sellStock(){
                const order={
                    stockId:this.stock.id,
                    stockPrice:this.stock.price,
                    stockQuantity:Number(this.sellQuantity)
                };
                this.placeSellOrder(order);
                this.sellQuantity=0;
            }
        },
    }
</script>

<style scoped>
    .danger{
        border:1px solid red;
    }
</style>
