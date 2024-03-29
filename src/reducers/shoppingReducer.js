import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import commerce from "../libs/commerce"
import { message } from "antd"

export const refreshCart = createAsyncThunk("cart/refreshCart", async () => {
    try {
        const res = await commerce.cart.refresh()
        return res
    } catch (error) {
        console.log("🚀error---->", error)
    }
})
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
    try {
        const response = await commerce.cart.retrieve()
        return response
    } catch (error) {
        console.log("🚀error---->", error)
    }
})

export const addCart = createAsyncThunk("cart/Add_Cart", async (payload) => {
    try {
        const { id, quantity } = payload
        const cart = await commerce.cart.add(id, quantity)
        return cart
    } catch (error) {
        console.log("🚀error---->", error)
    }
})
export const removeItem = createAsyncThunk("cart/removeItem", async (payload) => {
    try {
        const cart = await commerce.cart.remove(payload)
        return cart
    } catch (error) {
        console.log("🚀error---->", error)
    }
})

export const updateQty = createAsyncThunk("cart/updateQty", async (payload) => {
    try {
        const { id, quantity } = payload
        const cart = await commerce.cart.update(id, { quantity })
        console.log("🚀cart---->", cart)
        return cart
    } catch (error) {
        console.log("🚀error---->", error)
    }
})

export const emptyCart = createAsyncThunk("cart/emptyCart", async () => {
    try {
        const cart = await commerce.cart.empty()
        return cart
    } catch (error) {
        console.log("🚀error---->", error)
    }
})
const cart = {
    data: null,
}
const shoppingReducer = createReducer(cart, (builder) => {
    builder
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.data = action.payload
        })
        .addCase(addCart.fulfilled, (state, action) => {
            state.data = action.payload
            message.success("Add cart successfully")
        })
        .addCase(removeItem.fulfilled, (state, action) => {
            state.data = action.payload
            message.success("Remove successfully")
        })
        .addCase(updateQty.fulfilled, (state, action) => {
            state.data = action.payload
            message.success("Update successfully")
        })
        .addCase(emptyCart.fulfilled, (state, action) => {
            state.data = action.payload
            message.success("Remove all successfully")
        })
        .addCase(refreshCart.fulfilled, (state, action) => {
            state.data = action.payload
        })
})
export default shoppingReducer
