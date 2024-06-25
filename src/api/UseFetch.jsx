import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState (false)

    useEffect(() => {
        ;(async () => {
            try {
                setError(false)
                setLoading(true)
                const res = await fetch(url)
                const dataRes = await res.json()
                setData(dataRes)
                
            } catch (error) {
                setError(true)
            }finally{
                setTimeout(() => {

                    setLoading(false)
                }, 3000)
             
            }
        })()

    },[])
  return {data,loading, error}
}

export default UseFetch
