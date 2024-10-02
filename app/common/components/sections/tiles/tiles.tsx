// @ts-nocheck

import Wrapper from "../../partials/wrapper/wrapper"
import Tile from '../../partials/tile/tile'
import "./tiles.scss"

const Tiles = ({ content }) => {
  const { tiles = [] } = content

  return (
    <section className="tiles">
      <Wrapper>
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            heading={tile.heading}
            additionalInfo={`<ul>${tile.additionalInfo
              .map(infoItem => `<li>${infoItem}</li>`)
              .join('')}</ul>`} // Wrap the list items inside <ul> tags
            image={tile.image} // Pass the image URL from CMS
          />
        ))}
      </Wrapper>
    </section>
  )
}

export default Tiles