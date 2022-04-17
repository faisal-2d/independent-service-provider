import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      );
};

export default Loading;