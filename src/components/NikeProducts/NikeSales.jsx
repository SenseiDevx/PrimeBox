import React from 'react'
import NikeItem from './NikeItem.jsx'

const NikeSales = ({ifExists, nikeProduct: {items}}) => {
    // console.log(endpoint)
    return (
        <>
            <div className='nike-container'>
                <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-100 filter drop-shadow-lg'>Nike</h1>
                <div
                    className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
                    {items?.map((item, i) => (
                        <NikeItem {...item} key={i} ifExists={ifExists}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NikeSales