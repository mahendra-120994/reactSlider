import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="bg-container">
        <h1 className="heading">PLANETS</h1>
        <div data-testid="planets" className="slider-container">
          <Slider {...settings}>
            {planetsList.map(planetDetails => (
              <PlanetItem
                key={planetDetails.id}
                planetDetails={planetDetails}
              />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
export default PlanetsSlider
