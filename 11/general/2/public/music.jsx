class Music extends React.Component {
    render() {
    return (
    <div onClick={this.press} style={pStyle}> 
        <h3>{this.props.name}</h3>
        <img src={this.props.src}></img>
        <p>{this.props.description}</p>
    </div> 
    ) ;
    }
    }

