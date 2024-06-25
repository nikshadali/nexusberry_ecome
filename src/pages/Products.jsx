import UseFetch from '../api/UseFetch'
import Card from '../components/Card'
import Loader from '../components/Loader'
const Products = () => {
  const {data, loading, error} = UseFetch('https://fakestoreapi.com/products')
  console.log(data)
  if(loading){
    return <Loader/>
  }
  if(error){
    return <div>Something going wrong</div>
  }
  return (
    <div className='container mt-5'>
      <div className="row">
        <h2>All Products</h2>
        {data?.map(item => (
          <Card item={item}/>
        ))}
      </div>
      
    </div>
  )
}

export default Products
