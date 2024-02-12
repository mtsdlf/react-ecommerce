
import { useId } from 'react'
import {  useFilters } from '../hooks/useFilters'
import './Filters.css'
export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categortFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }
    
    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1500'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>
                    AR$ {filters.minPrice}
                </span>
            </div>
            <div>
                <label htmlFor={categortFilterId}>Category</label>
                <select id={categortFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='all'>Todas</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}