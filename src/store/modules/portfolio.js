const state={
    funds:10000,
    portfolioStocks:[]
};
const mutations={
    'BUY_STOCK'(state,{stockId, stockQuantity, stockPrice}){
        const record=state.portfolioStocks.find(elem=>elem.stockId==stockId);

        if(record){
            record.stockQuantity += stockQuantity;
        }else{
            state.portfolioStocks.push({stockId:stockId, stockQuantity: stockQuantity});
        }

        state.funds -= stockPrice*stockQuantity;

    },
    'SELL_STOCK'(state,{stockId, stockQuantity, stockPrice}){
        const record=state.portfolioStocks.find(elem=>elem.stockId==stockId);

        if(record.stockQuantity > stockQuantity){
            record.stockQuantity -= stockQuantity;
        }else{
            state.portfolioStocks.splice(state.portfolioStocks.indexOf(record), 1);
        }

        state.funds += stockPrice*stockQuantity;
    }
};
const actions={
    buyStock:({commit}, order)=>{
        commit('BUY_STOCK', order);
    },
    sellStock:({commit}, order)=>{
        commit('SELL_STOCK', order);
    }

};
const getters={
    funds:state=>{
        return state.funds;
    },
    stockPortfolio(state, getters){
        return state.portfolioStocks.map(portfolioStock_elem => {
            const record = getters.stocks.find(stock_elem => {return portfolioStock_elem.stockId==stock_elem.id;});

            return {
                id: portfolioStock_elem.stockId,
                quantity: portfolioStock_elem.stockQuantity,
                name: record.name,
                price: record.price
            }
        });
    }
};

export default{
    state,
    mutations,
    actions,
    getters,
}