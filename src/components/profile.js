import one from "../assets/images/img1.jfif"
import two from "../assets/images/img2.jpg"
import three from "../assets/images/img3.jpg"
import four from "../assets/images/img4.jpg"
import five from "../assets/images/img5.png"
import six from "../assets/images/img6.jpg"


function Galleryone(props)
{
  return(
    <div className="gallery">
      <img src={props.pho} alt={props.syn} />
      <h2>{props.syn}</h2>
      <p style={{color:"blueviolet"}}>{props.desc}</p>
    </div>
  )
}

var photo = [{
  url : one,
  title : "Shinchan",
  description : "Mischievous boy creating hilarious everyday "
},
{
  url : two,
  title : "Heidi",
  description : "Cheerful mountain girl loves nature"
},
{
  url : three,
  title : "Little Krishna",
  description : "Playful young hero with miracles"
},
{
  url : four,
  title : "Chhota Bheem",
  description : "Brave boy protects friends daily"
},
{
  url : five,
  title : "Mr Bean",
  description : "Clumsy man creates silent comedy"
},
{
  url : six,
  title : "Dora Bujji",
  description : "Curious little friends explore adventures"
}
]

export {photo}
export default Galleryone