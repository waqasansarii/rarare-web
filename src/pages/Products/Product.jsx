import React from 'react'
import Search from '../../components/ProductComp/Search'
import SearchResultHead from '../../components/ProductComp/searchResultHead'
import './Product.css'

const Product = () => {
    return (
        <div>
            <div className='product_container'>
                <Search />
                <SearchResultHead />
            </div>
        </div>
    )
}

export default Product
