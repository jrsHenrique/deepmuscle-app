import { createSlice } from "@reduxjs/toolkit";

export const humanMessage = createSlice({
	name: "humanMessage",
	initialState: {
		message: "",
	},
	reducers: {
		uptadeMessage: (state, action) =>
		{
			state.message = action.payload;
		},
	},
});

export const { uptadeMessage } = humanMessage.actions;

export default humanMessage.reducer;

