import React, {Component} from 'react';
//need to import to all with jsx


// const SearchBar = () => {
//     return <input/>
// };

class SearchBar extends Component { //the extend is to give the search bar functionalities from react componenet
    constructor(props){
        super(props);
        this.state = { term: '' };
        //state is created by creating a new object and pass to state
        //
    }
    
    render() {
        //return <input onChange = {this.onInputChange}/>;
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange ={(event) => this.setState({term:event.target.value})}/> 
                    {/* if onchange is removed becomes unable to type. it is now a controlled component */}
                Value of the input: {this.state.term}
            </div>
        );
    }

    //CAN USE ARROW FUNCTION AS PER ABOVE INSTEAD OF THE FUNCTION BELOW TO SHORTEN THE CODE

    // onInputChange(event) {
    //     //console.log(event.target.value);
    // }

}


export default SearchBar;
