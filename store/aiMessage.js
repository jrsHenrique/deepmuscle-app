import { createSlice } from "@reduxjs/toolkit";

export const aiMessage = createSlice({
	name: "aiMessage",
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) =>
		{
			state.messages.push(action.payload);
		},
	},
});

export const { addMessage } = aiMessage.actions;

export default aiMessage.reducer;

