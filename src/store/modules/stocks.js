import stocks from '../../data/stocks';

const state={
    stocks:[]
};
const mutations={
  'SET_STOCK'(state, stocks){
    state.stocks=stocks;
    },
  'RND_STOCK'(state){

  }
};
const actions={
    buyStock:({commit}, order)=>{
        commit();
    },
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