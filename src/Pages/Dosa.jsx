import React, { useEffect, useState } from 'react';

function Dosa() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('n')
      .then(response => response.json())
      .then(data => setProducts(data,console.log(data)))
      
  }, []);

  return (
    <div>
      <h1>Dosa</h1>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dosa;
