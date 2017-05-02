import React, { Component } from 'react';
import styled from 'styled-components'

const Repo = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const RepoTitle = styled.h2`
  font-weight: normal;
`;

const RepoLink = styled.a`
  color: #007afb;
`;

const RepoIcon = styled.i`
  color: #ffc500;
  margin-right: 7px;
`;

const RepoCounters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const CountersIcon = styled.i`
  color: #333;
  margin-right: 5px;
  font-size: 1.25em;
`;

const CountersLinks = styled.a`
  margin-right: 20px;
  &:link, visited {
    color: #777;
    text-decoration: none;
  }
  &:hover, active{
    color: #ff5600;
  }
`;

class StarredRepo extends Component {

    render() {
        let repo = this.props.repo;

        return (
            <Repo>
                <RepoTitle>
                    <RepoIcon className="fa fa-star" />
                    <RepoLink href={repo.html_url}>{repo.full_name}</RepoLink>
                </RepoTitle>
                <p>{repo.description}</p>
                <RepoCounters>
                    <CountersIcon className="fa fa-star" />
                    <CountersLinks href={repo.stargazers_url}>{repo.stargazers_count}</CountersLinks>

                    <br/>

                    <CountersIcon className="fa fa-code-fork" />
                    <CountersLinks href={repo.forks_url}>{repo.forks_count}</CountersLinks>
                </RepoCounters>
            </Repo>
        )
    }
}


export default StarredRepo;