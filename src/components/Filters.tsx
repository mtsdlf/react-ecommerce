
import { useId, useState } from 'react'
import './filters.css'
export function Filters ({onChange}) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categortFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
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
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>
                    {minPrice}
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