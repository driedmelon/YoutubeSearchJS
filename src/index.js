import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDVG9z8VPdHsQbpE8WI4uh0iR1WqTU3i7s'



//create a new component that produces
//some html
// const App = () => {
//     return (
//         <div> 
//             <SearchBar/>
//         </div>
//     );
// }

//making app a class based component because need to use state
class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => { //value named as video to be passed to below
            this.setState({videos});
            console.log(videos);
            //this.setState({videos: videos}); //this is the short form of above because the key and value pair is of same name

        });
    }
    
    render(){
        return (
            <div> 
                <SearchBar/>
                <VideoList videos = {this.state.videos}/>
            </div>
        );
    }
}

//take this component generated HTML
//and put on the page

ReactDOM.render(<App />, document.querySelector('.container'));
