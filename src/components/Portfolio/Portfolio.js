import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component {
    filler() {
        let filling = [];
        for (let i = 0; i < 500; i++) {
            filling.push(
                <div className="portfolio-item" style={
                    {
                        "background-color": `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
                        "height": `${20 + Math.floor(Math.random() * 25)}vh`
                    }
                }/>
            )
        }
        return filling;
    }

    render() {
        return <div className="portfolio">
            {this.filler()}
        </div>
    }
}

export default Portfolio