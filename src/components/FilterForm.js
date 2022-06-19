import React from 'react'

export const FilterForm = ({ onPriceInputChange, priceFrom, priceTo }) => {

  const onPriceInputChanged = (e) => {
    onPriceInputChange(e.target.name, e.target.value)
  }

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..." 
        onChange={onPriceInputChanged}
        value={priceFrom}
        />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..." 
        onChange={onPriceInputChanged}
        value={priceTo}
        />
    </div>
  )
}
