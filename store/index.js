// vuex state managment
export const state = () => ({
  Broowdbooks: []
});

export const getters = {
  Broowdbooks: state => state.Broowdbooks
};

export const mutations = {
  setBook: (state, book) => {
    state.Broowdbooks.push(book);
  }
};
