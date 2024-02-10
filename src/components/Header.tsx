import { Filters } from './Filters.tsx'

export function Header ({changeFilters}) {
    return (
        <header>
            <h1> Juguetes Online </h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}