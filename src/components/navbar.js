function Navbar(){
  

  return(
    <div className="main">
      <div className="container__one">
        <h1>Cartoons</h1>
      </div>

      <div className="container__two">
          <input type="Serach" placeholder="Serach..."/>
          <i className="fa-solid fa-magnifying-glass" style={{color:" rgb(177, 151, 252)"}}></i>
      </div>

      <div className="container__three">
        <h4><a href="">Home</a></h4>
        <h4><a href="">Favourite</a></h4>
      </div>

    </div>
    
  )
}

export default Navbar