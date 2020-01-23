import React from 'react';

const withClass = (WrappedComponent, className) => {
    return porps => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;