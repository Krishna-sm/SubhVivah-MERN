import Hero from "./components/Hero"
import InhouseServices from "./components/InhouseServices"
import PopularSearch from "./components/PopularSearch"
import PopularVenue from "./components/PopularVenue"
import WeddingCategories from "./components/WeddingCategories"

 
const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
    <PopularVenue  />
    <PopularSearch/>
    <WeddingCategories/>
    <InhouseServices/>
    </div>
  )
}

export default HomePage