import './Hour.css';
import React from 'react';

class Hour extends React.Component {
    render() {
        return(
            <span className="hour">
                {this.props.hour}
            </span>
        )
    }
}

export default Hour;