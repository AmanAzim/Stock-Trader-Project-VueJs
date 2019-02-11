import stocks from '../../data/stocks';

const state={
    stocks:[]
};
const mutations={
  'SET_STOCK'(state, stocks){
    state.stocks=stocks;
    },
  'RND_STOCK'(state){
        state.stocks.forEach(element=>{
            element.price=Math.round(element.price*(1+Math.random()-0.5));
        })
  }
};
const actions={
    initStocks:({commit})=>{
        commit('SET_STOCK', stocks);
    },
    randomizeStocks:({commit})=>{
        commit('RND_STOCK');
    }
};
const getters={
    stocks:state=>{
        return state.stocks;
    }
};

export default{
    state,
    mutations,
    actions,
    getters,
};