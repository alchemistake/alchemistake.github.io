import React from 'react';
import './TagLine.scss';

class TagLine extends React.Component {
    render() {
        return <div className="tag-line">
            <div className="text">It's a me:</div>
            <img src="logo-fill.png" className="logo" alt="Logo"/>
            <div className="text-container">
                <span className="text">I'm&nbsp;</span>
                <span className="text">Software Engineer&nbsp;</span>
                <span className="text">by day.</span>
            </div>
            <div className="text-container">
                <span className="text">I try to be&nbsp;</span>
                <span className="text">Someone else&nbsp;</span>
                <span className="text">by night.</span>
            </div>
        </div>
    }
}

export default TagLine;
