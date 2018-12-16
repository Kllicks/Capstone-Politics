import React from 'react';
import Header from './Header';

//function component since just need it show the header and child view 
//props.children 
const App = (props) => {
    return (
        <div>
            <Header />
            {/* children component */}
            {/* body of our page gets swapped out as visit different routes */}
            {props.children}
        </div>
    );
}


export default App;