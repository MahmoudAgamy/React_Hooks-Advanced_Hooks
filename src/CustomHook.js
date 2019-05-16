import React, { Component, useState, useEffect } from 'react';

function searchGithub(query) {
  return fetch(
    `https://api.github.com/search/repositories?q=${query}:javascript&sort=stars&order=desc`
  )
    .then(resp => resp.json())
    .then(resp => resp.items);
}

export default class SearchGithub extends Component {
  state = {
    search: '',
  };

  inputRef = React.createRef();

  search = e => {
    e.preventDefault();
    this.setState({ search: this.inputRef.current.value });
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.search}>
        <input type="text" placeholder="Search" ref={this.inputRef} />
        <button type="submit" onClick={this.search}>
          Search
        </button>
        <h1>{search}</h1>
        {/* {search && <GitHubSearchClass search={search} />} */}
        {search && <GitHubSearchFunction search={search} />}
      </form>
    );
  }
}

class GitHubSearchClass extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    searchGithub(this.props.search).then(resp => this.setState({ data: resp }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      searchGithub(this.props.search).then(resp =>
        this.setState({ data: resp })
      );
    }
  }

  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <a href={item.html_url}>{item.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

function useGitHubSearch(search) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      searchGithub(search).then(resp => setData(resp));
    },
    [search]
  );

  return data;
}

function GitHubSearchFunction({ search }) {
  const data = useGitHubSearch(search);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.html_url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
