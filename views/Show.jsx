const React = require('react')

class Show extends React.Component{
    render() {
        const poke = this.props.poke;
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                {poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}
                <img src={poke.img} />
                <a href={'/pokemon'} >back </a> 
            </div>
        )
    }
}

module.exports  = Show;