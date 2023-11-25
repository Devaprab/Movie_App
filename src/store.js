import {createStore} from 'vuex'


const store = createStore({
    state() {
        return{
            showMovies: false
        };
    },
    mutations: {
        setVisibilityTrue(state) {
            state.showMovies = true;
        },
        setVisibilityFalse(state) {
            state.showMovies = false;
        },
    },
    getters: {
        showVisibility(state) {
            return state.showMovies;
        }
    }
});




export default store;