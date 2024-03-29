import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import {
  Aboutpage,
  Blogpage,
  CartPage,
  CheckoutPage,
  HomePage,
  ProductDetailpage,
  Productpage,
  AccountPage
} from "./pages"
import { Footer, Header } from "./components"
import MainProvider from "./context/MainContext"
import { Provider } from "react-redux"
import store from "./store"
import { Dashboard, Orders, Wishlists } from "./pages/AccountPage"

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainProvider>
          {" "}
          <BrowserRouter>
            <Header />
            <main
              className="mt-[85px]  "
              id="main"
            >
              <Routes>
                <Route
                  path="/"
                  element={<HomePage />}
                />
                <Route
                  path="/product/:id"
                  element={<ProductDetailpage />}
                />
                <Route
                  path="/about"
                  element={<Aboutpage />}
                />
                <Route
                  path="/productpage"
                  element={<Productpage />}
                />
                <Route
                  path="/productpage/:id"
                  element={<Productpage />}
                />
                <Route
                  path="/blog"
                  element={<Blogpage />}
                />
                <Route
                  path="/checkout"
                  element={<CheckoutPage />}
                />
                <Route
                  path="/cart"
                  element={<CartPage />}
                />
                <Route
                  path="/account"
                  element={<AccountPage />}
                >
                  <Route
                    path="/account/dashboard"
                    element={<Dashboard />}
                  />
                  <Route
                    path="/account/orders"
                    element={<Orders />}
                  />
                  <Route
                    path="/account/wishlists"
                    element={<Wishlists />}
                  />
                </Route>
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </MainProvider>
      </Provider>
    </div>
  )
}

export default App
