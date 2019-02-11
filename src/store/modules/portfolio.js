const state={
    funds:10000,
    portfolioStocks:[]
};
const mutations={
    'BUY_STOCK'(state,{stockId, stockPrice,  stockQuantity}){
        const record=state.portfolioStocks.find(elem=>elem.id==stockId);

        if(record){
            record.quantity += stockQuantity;
        }else{
            state.portfolioStocks.push({id:stockId, quantity: stockQuantity});
        }
        state.funds -= stockPrice*stockQuantity;

    },
    'SELL_STOCK'(state,{stockId, stockPrice, stockQuantity}){
        const record=state.portfolioStocks.find(elem=>elem.id==stockId);

        if(record.quantity > stockQuantity){
            record.quantity -= stockQuantity;
        }else{
            state.portfolioStocks.splice(state.portfolioStocks.indexOf(record), 1);
        }

        state.funds += stockPrice*stockQuantity;
    },
    'RESTORE_PORTFOLIO'(state, serverPortfolio){
       state.portfolioStocks=serverPortfolio.portfolio? serverPortfolio.portfolio : [];
       state.funds=serverPortfolio.funds;
    }
};
const actions={
    buyStock:({commit}, order)=>{
        commit('BUY_STOCK', order);
    },
    sellStock({commit}, order){
        commit('SELL_STOCK', order);
    },
};
const getters={
    funds:state=>{
        return state.funds;
    },
    stockPortfolio(state, getters){
        return state.portfolioStocks.map(portfolioStock_elem => {
            const record = getters.stocks.find(stock_elem => {return portfolioStock_elem.id==stock_elem.id;});
            return {
                id: portfolioStock_elem.id,
                quantity: portfolioStock_elem.quantity,
                name:record.name,
                price:record.price
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