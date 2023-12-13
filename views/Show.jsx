const React = require('react')

class Show extends React.Component{
    render() {
        const poke = this.props.poke;
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{poke.name}</h2>
                <img src={poke.img} />
                <a href={'/pokemon'} >back </a> 
            </div>
        )
    }
}

module.exports  = Show;