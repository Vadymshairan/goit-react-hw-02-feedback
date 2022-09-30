import React from 'react';

import { Button } from '../Button/Button';
import { Container, Title } from './Feedback.styled';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <div>
          <button type="button" onClick={this.onGoodBtnClick}>
            Good
          </button>
          <button type="button" onClick={this.onNeutralBtnClick}>
            Neutral
          </button>
          <Button>Bad</Button>
        </div>

        <div>
          <Title>Statistics</Title>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </Container>
    );
  }
}
