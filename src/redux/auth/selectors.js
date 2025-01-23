export const selectIsLoggedIn = (state) => state.auth.isLoggedIn; // Вибір чи користувач увійшов  
export const selectUser = (state) => state.auth.user; // Вибір даних користувача  
export const selectIsRefreshing = (state) => state.auth.isRefreshing; // Вибір стану оновлення даних