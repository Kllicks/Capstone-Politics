import React from 'react';
import Header from './Header';

//function component since just need it show the header and child view 
//props.children 
const App = (props) => {
    return (
        //classname container for materialize css to work with row and col s4 in auth form
        <div className="container">
            <Header />
            {/* children component */}
            {/* body of our page gets swapped out as visit different routes */}
            {props.children}
        </div>
    );
}


export default App;