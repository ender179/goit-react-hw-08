import { fetchContacts, addContact, deleteContact} from './operations';
import {  logOut } from '../auth/operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.loading = false;
                state.error = null;
            });
    },
});

export const { actions, reducer } = contactsSlice;
export default reducer;