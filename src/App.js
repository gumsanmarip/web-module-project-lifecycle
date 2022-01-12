import React from 'react';
import axios from 'axios';

import FollowerList from './components/FollowerList';
import User from './components/User';


class App extends React.Component {
  state = {
    user: {}
  }

componentDidMount() {
    axios.get('https://api.github.com/users/gumsanmarip')
        .then(response => {
          this.setState({
            ...this.state,
            user: response.data
          })
        })
        .catch(errors => {
          console.log(errors);
        })
      }



  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder='Github Handle'/>
        <button>Search</button>
      </form>

      <div id="UserCard">
        <img src="https://avatars.githubusercontent.com/u/55228282?v=4"/>
        <a target="_blank" href="https://github.com/gumsanmarip"><h3>Gumsan Marip</h3></a>
        <p>(wlongmire)</p>
        <p>Total Repos: 101</p>
        <p>Total Followers: 29</p>
      </div>

      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/38574400?v=4"/>
          <a target="_blank" href="https://github.com/dbvker"><p>dbvker</p></a>
        </div>
      </div>

      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/38574400?v=4"/>
          <a target="_blank" href="https://github.com/dbvker"><p>dbvker</p></a>
        </div>
      </div>
     

    </div>);
  };
}

export default App;
