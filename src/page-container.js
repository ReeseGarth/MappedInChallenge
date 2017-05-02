import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  font-family: 'Segoe Ui';
  background: #eee;
  padding: 40px;  
`;

const Rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingWheel = styled.i`
  animation: ${Rotate360} 2s linear infinite;
`;

class PageContainer extends Component {

    render() {

        const repoList = this.props.repoList;
        const title = this.props.title;
        var loadingWheel;

        if (repoList)
            loadingWheel = null;
        else
            loadingWheel = <LoadingWheel className="fa fa-spinner" hide={title}/>;

        return (
            <Container>
                <Title>{title} {loadingWheel}</Title>
                {repoList}
            </Container>
        )
    }
}

export default PageContainer;