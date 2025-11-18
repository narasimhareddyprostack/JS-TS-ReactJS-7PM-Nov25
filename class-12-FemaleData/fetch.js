fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(product_data => console.log(product_data))