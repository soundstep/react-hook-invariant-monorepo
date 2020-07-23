import React from 'react';
import { useTracking } from 'react-tracking';

const TestReactTracking = () => {
    const tracking = useTracking();
    return (
      <button
        onClick={() => {
            tracking.trackEvent({ action: 'click' });
        }}
      >
        Click Me
    </button>
    );
};

export default TestReactTracking;
