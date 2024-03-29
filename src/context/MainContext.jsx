import React, { createContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import commerce from "../libs/commerce"
import { addCart, fetchCart, removeItem, updateQty } from "../reducers/shoppingReducer"
import { message } from "antd"
import { child, get, ref, update } from "firebase/database"
import { auth, db } from "../firebase/firebaseConfig"
import { onAuthStateChanged, signOut } from "firebase/auth"

export const MainContext = createContext()
const MainProvider = ({ children }) => {
    const [dataCate, setDataCate] = useState([])
    const [checkoutToken, setCheckoutToken] = useState()
    const [userInfo, setUserInfo] = useState({})
    const [userData, setUserData] = useState({})
    const [wishlist, setWishlist] = useState([])
    const dispatch = useDispatch()
    const handleAddCart = (id, quantity) => {
        if (!userInfo) return message.info("Please Login first")
        message.loading("Updating...")
        dispatch(addCart({ id, quantity }))
    }
    const handleUpdateQty = (id, quantity) => {
        message.loading("Updating...")
        dispatch(updateQty({ id: id, quantity: quantity }))
    }
    const handleRemove = (productId) => {
        message.loading("Removing...")
        dispatch(removeItem(productId))
    }
    const getCheckoutToken = async () => {
        const cartId = await commerce.cart.id()
        const token = await commerce.checkout.generateToken(cartId, { type: "cart" })
        setCheckoutToken(token)
    }
    const handleWishlist = (prod) => {
        if (!userInfo) return message.info("Please Log In First")
        const { id } = prod
        if (userData.wishlists) {
            const newList = [...userData.wishlists]
            const isSameProd = newList.findIndex((element) => element.id === id)
            if (isSameProd === -1) {
                newList.push(prod)
                updateData({ ...userData, wishlists: newList }, userInfo.uid)
                getUserData(userInfo.uid)
                message.success("Product has been added successfully ")
            } else {
                const result = newList.filter((element) => element.id !== id)
                updateData({ ...userData, wishlists: result }, userInfo.uid)
                getUserData(userInfo.uid)
                message.success("Product has been removed ")
            }
        } else {
            const wishlist = []
            wishlist.push(prod)
            updateData({ ...userData, wishlists: wishlist }, userInfo.uid)
            getUserData(userInfo.uid)
            message.success("Product has been added successfully ")
        }
    }
    const handleSignOut = () => {
        signOut(auth)
        message.success("Sign out successfully")
        setUserInfo(null)
    }
    const updateData = async (postData, uid) => {
        const updates = {}
        updates[`/user/${uid}`] = postData
        return update(ref(db), updates)
    }
    const getUserData = async (uid) => {
        const dbRef = ref(db)
        get(child(dbRef, `user/${uid}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val())
                    const data = snapshot.val()
                    setUserData(data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }
    useEffect(() => {
        const fetchCate = async () => {
            const cate = await commerce.categories.list()
            setDataCate(cate.data)
        }
        fetchCate()
        dispatch(fetchCart())
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserInfo(user)
                try {
                    await getUserData(user.uid)
                } catch (error) {
                    console.error("Error getting user data:", error)
                }
            }
        })

    }, [])
    return (
        <MainContext.Provider
            value={{
                dataCate,
                handleAddCart,
                checkoutToken,
                getCheckoutToken,
                handleUpdateQty,
                handleRemove,
                userInfo,
                setUserInfo,
                handleWishlist,
                wishlist,
                handleSignOut,
                updateData,
                userData,
                setUserData, getUserData
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
