
import Navbar from "./components/navbar";
import Heading from "./components/heading";
import Galleryone, {photo} from "./components/profile";



function App()
{
    return(
      
  <div>
    <Navbar></Navbar>
    <Heading></Heading>

   <div className="gallery__card">
     {
    photo.map(function(item)
    {
      return(<Galleryone pho={item.url} syn={item.title} desc={item.description}></Galleryone>)
    })
  }
   </div>
    
  </div>
)
    
}

export default App