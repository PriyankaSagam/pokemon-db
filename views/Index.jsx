const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
            return(
               <div style={myStyle}>
                    <h1>See All The Pokemon!</h1>
                    
                    <ul>
                        {pokemon.map((poke, i) => {
                            return (
                                <li key = {poke.name}>
                                    <a href={`/pokemon/${i}`} >
                                      {poke.name}
                                    </a>  {' '}
                                    is <img src = {poke.img} />
                                </li>
                            )
                        })}
                    </ul>
               </div>
        )
    }
    
 }


 module.exports = Index;