import { products as initialProducts} from './mocks/product.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { FiltersContext } from './context/filters'
function useFilters() {
/*   const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  }) */
  const {filters, setFilters} = useContext(FiltersContext)
  
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category 
        )
      )
    })
  }
  return {filterProducts, setFilters}
}

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts}/>
      <Footer></Footer>
    </>
  )
}

export default App
