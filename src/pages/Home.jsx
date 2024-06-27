import UseFetch from '../api/UseFetch'
import Category from '../components/Category'
import Featured from '../components/Featured'
import Loader from '../components/Loader'
import Services from '../components/Services'
import Slider from '../components/Slider'


const Home = () => {
  const {data, loading, error} = UseFetch('https://fakestoreapi.com/products')
 
  if(loading){
    return <Loader/>
  }
  if(error){
    return <div>Some thing going wrong</div>
  }
   const newObj = {}
   data?.forEach(item => {
    if(!newObj[item.category]){
      newObj[item.category] = item
    }
   })
   const categries = Object.values(newObj)
   
  return (
    <div className='home'>
      <Slider />
    <Category categries={categries}/>
    <Services />
    <Featured data={data}/>
    </div>
  )
}

export default Home
