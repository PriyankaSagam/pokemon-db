const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1> Edit the Pokemon</h1>
                <form action={`/pokemon/${this.props.poke._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.poke.name} /><br />
                    Image: <input type="text" name="img"  defaultValue={this.props.poke.img} /><br />
                    
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>

        )
    }
}
module.exports = Edit;