<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
                    <router-link class="navbar-brand" to="/"><a>Stock Trader</a></router-link>
                </div>

                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <router-link tag="li" class="nav-item" to="/portfolio" activeClass="active"><a>Portfolio</a></router-link>
                        <router-link tag="li" class="nav-item" to="/stocks" activeClass="active"><a>Stocks</a></router-link>
                    </ul>

                    <strong class="navbar-text navbar-right">Funds: {{$store.getters.funds | currency}}</strong>
                    <ul class="nav navbar-nav navbar-right">
                        <li style="cursor: pointer" activeClass="active" v-on:click="endDay"><a>End Day</a></li>
                        <li class="dropdown" style="cursor: pointer" :class="{open:isDropdownOpen}"  v-on:click="isDropdownOpen=!isDropdownOpen">
                            <a class="dropdown-toggle" data-toggle="dropdown">Save & Load
                                <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a v-on:click="saveData">Save</a></li>
                                <li><a v-on:click="loadData">Load</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data(){
            return{
                isDropdownOpen:false
            }
        },
        methods:{
            ...mapActions([
                'randomizeStocks',
                'serverData'
            ]),
            endDay(){
                this.randomizeStocks();
            },
            saveData(){
                const data={
                    funds:this.$store.getters.funds,
                    stockPortfolio:this.$store.getters.stockPortfolio,
                    stocks:this.$store.getters.stocks
                };
                this.$http.put('StockData.json', data);
            },
            loadData(){
                this.serverData();
            }
        }
    }
</script>

<style scoped>

</style>