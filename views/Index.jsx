const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
    render() {
        const {pokemon} = this.props
            return(
               <div style={myStyle}>
                    <h1>See All The Pokemon!</h1>
                    <nav>
                      <a href="/new">Create a Pokemon</a>
                    </nav>
                    <ul>
                        {pokemon.map((poke, i) => {
                            return (
                                <li>
                                    <a href={`/pokemon/${poke._id}`} >
                                      {poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}
                                    </a>  {' '}
                                    is <img src={poke.img} />
                                    <br />
                                    <a href={`/pokemon/${poke._id}/edit`}> Edit This Pokemon</a>
                                   <form action={`/pokemon/${poke._id}?_method=DELETE`}  method="Post">
                                       <input type="submit" value="DELETE" />
                                  </form>
                                </li>
                            )
                        })}
                    </ul>
               </div>
        )
    }
    
 }


 module.exports = Index;