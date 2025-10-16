import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data)
            setLoading(false)
            setError(null)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    })

  return (
    <div>
      
    </div>
  )
}

export default FetchApi
