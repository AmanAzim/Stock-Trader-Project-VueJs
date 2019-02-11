import Vue from 'vue';

export const serverData=({commit})=>{
    Vue.http.get('StockData.json').then(response=> response.json()).then(data=>{
        if(data){
            const funds=data.funds;
            const stocks=data.stocks;
            const portfolio=data.stockPortfolio;

            const serverPortfolio={
                funds,
                portfolio
            };

            commit('RESTORE_PORTFOLIO', serverPortfolio);
            commit('SET_STOCK', stocks);
        }

    });
};