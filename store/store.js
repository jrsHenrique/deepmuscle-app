import { configureStore } from '@reduxjs/toolkit'
import aiMessageReducer from './aiMessage'
import humanMessage from './humanMessage'

export default configureStore({
	reducer: {
		aiMessage: aiMessageReducer,
		humanMessage: humanMessage,
	},
})