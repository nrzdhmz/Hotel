import Spa from '../assets/images/spa.png'
import Villa from '../assets/images/villa.png'
import Skihotel from '../assets/images/skihotel.png'
import Resort from '../assets/images/resort.png'
import Pool from '../assets/images/pool.png'

const inspiration = () => {
  return (
    <section className='inspiration'>
      <div className="container">
        <h3>
          Discover your new favourite stay
        </h3>
        <div className="images">
          <div><img src={Spa} alt="Spa" />
          <p>Spa</p></div>
          <div><img src={Villa} alt="Villa" />
          <p>Villa</p></div>
          <div><img src={Skihotel} alt="SkiHotel"/>
          <p>Ski Hotel</p></div>
          <div><img src={Resort} alt="Resort" />
          <p>Resort</p></div>
          <div><img src={Pool} alt="Pool" />
          <p>Pool</p></div>
        </div>
      </div>
    </section>
  )
}

export default inspiration 