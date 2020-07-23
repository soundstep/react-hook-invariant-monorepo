import React from 'react';
import track from 'react-tracking';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import TestReactTracking from './components/TestReactTracking';

function App() {
  return (
    <div className="App">
        <Header />
        <Counter />
        <TestReactTracking />
    </div>
  );
}

const AppTracked = track(
    {
        data: 1
    },
    {
        dispatch: (d) => {
            console.log('tracking', d);
        }
    }
)(App);

export default AppTracked;
