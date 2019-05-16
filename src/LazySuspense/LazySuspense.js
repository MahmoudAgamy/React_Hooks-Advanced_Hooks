import React, { Component, Suspense } from 'react';
import './styles.css';
import { ShowTimer, Fallback, slowImport } from './Helpers';

const Description = React.lazy(() =>
  slowImport(import('./Description'), 500)
);
const Cast = React.lazy(() =>
  slowImport(import('./Cast'), 500)
);

export default class LazySuspense extends Component {
  state = {
    countTime: false,
  };

  setCountTime = countTime => this.setState({ countTime });

  render() {
    const { countTime } = this.state;
    return (
      <div>
        <ShowTimer countTime={countTime} />
        <br />
        <h1>React: A Movie</h1>
        <Suspense
          fallback={
            <Fallback
              onAdded={() => this.setCountTime(true)}
              onRemoved={() => this.setCountTime(false)}
            >
              Loading...
            </Fallback>
          }
        >
          <Description />
          <Cast />
        </Suspense>
      </div>
    );
  }
}
