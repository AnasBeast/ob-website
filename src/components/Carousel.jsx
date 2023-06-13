import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Perso() {
  return (
    <Carousel showArrows={true} showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={require("https://upload.wikimedia.org/wikipedia/commons/4/46/Mnakbi.jpg")} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require("https://upload.wikimedia.org/wikipedia/commons/b/b5/Mohamed_Kaoual.jpg")} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require("https://upload.wikimedia.org/wikipedia/commons/6/60/Othman_Chaouachi.jpg")} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require("../assets/images/345259354_612506880834803_4342608697364029960_n.jpg")} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={require("../assets/images/345264813_121345820977270_7109951677911314962_n.jpg")} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={require("../assets/images/348359302_840090926967635_7670146163475493589_n.jpg")} />
                    <p className="legend">Legend 6</p>
                </div>
    </Carousel>
  )
}
