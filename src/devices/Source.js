import React, { Component } from 'react';

class Source extends Component {
    constructor(props){
        super(props);

        this.state = {
            running: false
        }
    }

    render() {
        return (
            <div className="device-source card bg-light mb-3">
                <div className="card-header">{this.props.data.title}</div>
                <div className="card-body">
                    <h6 className="card-title">Contexts: {this.props.data.contexts}</h6>
                    <h6>IP: {this.props.data.ip}</h6>
                    <p className="card-text">
                        { this.state.running ?  <div>
                            <span className="device-running-disp">running</span>
                            <button className="btn-danger">STOP</button>
                        </div> :  <button className="btn-primary">START</button> }
                    </p>
                </div>
            </div>
        )
    }
}

export default Source;