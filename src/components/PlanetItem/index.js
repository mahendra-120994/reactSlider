import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="planet">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
