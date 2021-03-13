import React from "react";

class AutoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ["GGGGG", "GGEEEEE", "EDFSD"],
      searched: "",
      filtered: []
    };
  }

  openDropDown = (value) => {
    let filteredRes = this.state.results.filter((r) => {
      
      if (r.includes(value)) {
        return r;
      }
    });
    this.setState({filtered: filteredRes});
  };

  parseDropDown = () => {
    return this.state.filtered.map((r) => <div>{r}</div>);
  };

  render() {
    return (
      <div>
        <input onKeyUp={(e) => this.openDropDown(e.target.value)} />
        {this.state.searched}
        {this.parseDropDown()}
      </div>
    );
  }
}
export default AutoSearch;
