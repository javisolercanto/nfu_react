import './Day.css';
import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: '',
        }
    }

    componentDidMount() {
        let date = new Date();

        this.setState({
            today: date.getDate()
        });

        console.log(this.props.data);
    }

    render() {
        return(
            <div onClick={() => this.props.change(this.props.data)} 
                className={this.props.isSelected
                ? this.props.data.day === this.state.today ? 'day  day__selected  day__today--selected' : 'day  day__selected'
                : this.state.today === this.props.data.day ? 'day  day__today' : 'day'}>
                <span>{this.props.data.weekday}</span>
                <span>{this.props.data.day + '/' + (this.props.data.month+1)}</span>
            </div>
        )
    }
}

export default Day;