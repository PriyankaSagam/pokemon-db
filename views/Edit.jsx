const React = require("react");
const imgsize = {
  width: "200px",
  height: "200px",
};
const pokeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20,21,22,23,24,25];
class Edit extends React.Component {
  render() {
    return (
      <div>
        <h1> Edit the pokemon</h1>
        <form
          action={`/pokemon/${this.props.poke._id}?_method=PUT`}
          method="POST"
        >
          Name:
          <input
            type="text"
            name="name"
            defaultValue={this.props.poke.name}
          />
          <br />
          Choose Image:
          <br />
          {pokeNum.map((num, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="img"
                  value={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokeNum[num - 1]
                  }.png`}
                />
                <img
                  style={imgsize}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokeNum[num - 1]
                  }.png`}
                />
              </label>
            );
          })}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    );
  }
}
module.exports = Edit;