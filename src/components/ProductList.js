import React from 'react'

export const ProductList = ({ displayedProducts, columns }) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({displayedProducts.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            displayedProducts.map((product, index) => {
              <tr key={index} >
              {columns.id &&  <td>{product.id}</td>}
              {columns.name && <td>{product.name}</td>}
              {columns.department && <td>{product.department}</td>}
              <td>`${columns.price &&  product.price} ${columns.currency &&  product.currency}`</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
