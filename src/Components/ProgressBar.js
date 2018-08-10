import React from 'react'

class ProgressBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      progress: this.props.pg
    }
  }

  mouseEnter = () => {
    this.setState({progress: 100})
  }

  mouseLeave = () => {
    this.setState({progress: this.props.pg})
  }

  render(){
    const { lg, from, to } = this.props;
    return (
      <div>
        <p className="text-white skillName">{lg}</p>
        <div className="bar">
            <div className="barProgress" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}
            style=
              {{ 
                  width: `${this.state.progress}%`, 
                  backgroundImage: `linear-gradient(to left, ${from}, ${to})`
              }}>
             </div>
        </div>
      </div>
    )
  }
}

export default ProgressBar
