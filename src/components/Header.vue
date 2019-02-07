<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/"><a>Stock Trader</a></router-link>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link tag="li" class="nav-item" to="/portfolio" activeClass="active"><a>Portfolio</a></router-link>
                        <router-link tag="li" class="nav-item" to="/stocks" activeClass="active"><a>Stocks</a></router-link>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <router-link tag="li" activeClass="active" to="#"><a>End Day</a></router-link>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Save & Load
                                <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Save</a></li>
                                <li><a href="#">Load</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>