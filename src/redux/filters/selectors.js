export const selectAllFilters = (state) => state.filters;  

export const selectFilterValueByName = (state, filterName) =>   
    selectAllFilters(state)[filterName];