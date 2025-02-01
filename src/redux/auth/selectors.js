export const selectIsRefreshing = (state) => state.auth.isRefreshing;  

export const selectUser = (state) => state.auth.user;  

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn; // Новый селектор