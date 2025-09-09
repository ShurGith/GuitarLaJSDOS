
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { CartProvider } from './context/cartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
