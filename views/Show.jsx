const React = require('react')

class Show extends React.Component{
    render() {
        const poke = this.props.poke;
        return (
            <div>
                <br />
                <a href={`/pokemon`}>Back</a>
                <h1>Gotta Catch 'Em All</h1>
             <h2>  Name: {poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}</h2>
                <img src={poke.img} alt={`Image of ${poke.name}`} />
                
                <br />
                <br />
                
                <p>The {poke.name} is {poke.img}</p>

            
            </div>
        )
    }
}

module.exports  = Show;