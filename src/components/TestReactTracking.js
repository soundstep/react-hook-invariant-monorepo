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
        Track me (console.log)
    </button>
    );
};

export default TestReactTracking;
