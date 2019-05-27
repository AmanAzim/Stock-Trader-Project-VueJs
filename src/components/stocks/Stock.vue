<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}} <small>(Price:{{stock.price}})</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control " type="number" placeholder="Quantity" @input="checkFunds" :class="{danger:!fundSufficient}" v-model="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" v-on:click="buyStock" :disabled="(quantity<=0 || !Number.isInteger(Number(quantity))|| !fundSufficient)">{{fundSufficient ? 'Buy':'Insufficient funds'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['stock'],
        data(){
            return{
                quantity:0,
                fundSufficient:true,
            };
        },
        methods:{
           checkFunds(){
               const currentFunds=this.$store.getters.funds;
               if(currentFunds >= this.stock.price*this.quantity)
               {
                   this.fundSufficient=true;
               }
               else{
                   this.fundSufficient=false;
               }
           },
           buyStock(){
               if(this.fundSufficient)
               {
                   const order={
                       stockId: this.stock.id,
                       stockPrice: this.stock.price,
                       stockQuantity: Number(this.quantity)
                   };
                   this.$store.dispatch('buyStock', order);
                   this.quantity=0;
               }
           }
        }
    }
</script>

<style scoped>
    .danger{
        border:1px solid red;
    }
</style>
