import './Landing.css';
// import Button from '../components/button/Button';
// import Card from '../components/card/Card';
import Hero from '../components/hero/Hero';
import TopThree from '../components/top3/TopThree';
import Filter from '../components/filter/Filter';
import Button from '../components/button/Button';
import './Landing.css';

function landing() {
  return (
    <>

    <Hero></Hero>
    <TopThree></TopThree>
    <div id="btn-search" ><Filter></Filter></div>
    <div className='content-btn'>
    <Button label="Sugiere una nueva cafetería" to="/coffeeform"></Button>
    </div>
    </>
  )
}

export default landing;