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
        dummyAllProduct : [],
        loading : false,
        errormsg : ""
    },
    reducers: {
        searchProduct : (state , actionByHeader) => {
            state.allproducts = state.dummyAllProduct.filter(item => item.title.toLowerCase().includes(actionByHeader.payload))
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, apiresult) => {
            state.allproducts = apiresult.payload
            state.dummyAllProduct = apiresult.payload
            state.loading = false
            state.errormsg = ''
        })
        builder.addCase(fetchProducts.pending, (state, apiresult) => {
            state.allproducts = []
            state.dummyAllProduct = []
            state.loading = true
            state.errormsg = ''
        })
        builder.addCase(fetchProducts.rejected, (state, apiresult) => {
            state.allproducts = []
            state.dummyAllProduct = []
            state.loading = false
            state.errormsg = 'Api call failed'
        })
    }
    
})

export const {searchProduct} = productSlice.actions
export default productSlice.reducer