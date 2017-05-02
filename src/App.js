import React, { Component } from 'react';
import StarredRepo from './starred-repo.js';
import PageContainer from './page-container.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: null
        };
    }

    componentDidMount() {
        const url = `https://api.github.com/users/axiomaticdesign/starred`;

        fetch(url)
            .then(res => res.json())
            .then(data => this.handler(data));
    }

    render() {
        if (this.state.data === null) {
            return (
                <PageContainer title="Loading" repoList={null}>
                </PageContainer>
            )
        } else {
            return (
                <PageContainer title="Starred repos for axiomaticdesign" repoList={this.state.data.map(this.createRepo)}>
                </PageContainer>
            )
        }
    }

    handler(data) {
        return this.setState({data: data});
    }

    createRepo(repo, index) {
        return <StarredRepo repo={repo} key={index} />;
    }
}

export default App;
