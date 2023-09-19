import {configureStore} from '@reduxjs/toolkit'
import { coustomReducers } from './Reducers'

const Store=configureStore({
    reducer:{
        custom:coustomReducers
    }
})

export default Store