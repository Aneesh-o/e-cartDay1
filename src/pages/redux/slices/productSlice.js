import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// action return a promis
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result);
    // To store session storage
    sessionStorage.setItem("allproducts",JSON.stringify(result.data.products))
    return result.data.products
})


const productSlice = createSlice({
    name: 'products',
    initialState: {
        allproducts: [],
        loading : false,
        errormsg : ""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, apiresult) => {
            state.allproducts = apiresult.payload
            state.loading = false
            state.errormsg = ''
        })
        builder.addCase(fetchProducts.pending, (state, apiresult) => {
            state.allproducts = []
            state.loading = true
            state.errormsg = ''
        })
        builder.addCase(fetchProducts.rejected, (state, apiresult) => {
            state.allproducts = []
            state.loading = false
            state.errormsg = 'Api call failed'
        })
    }
    
})

export default productSlice.reducer