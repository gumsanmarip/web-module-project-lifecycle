import React from 'react';
import axios from 'axios';

import FollowerList from './components/FollowerList';
import User from './components/User';


class App extends React.Component {
  state = {
    currentUser: "gumsanmarip",
    user:{
      avatar_url: "https://avatars.githubusercontent.com/u/55228282?v=4",
      html_url: "https://github.com/gumsanmarip",
      name: "Gumsan Marip",
      login: "gumsanmarip",
    },
    followers: [
      {
        login: "dbvker",
        avatar_url: "https://avatars.githubusercontent.com/u/38574400?v=4",
        html_url: "https://github.com/dbvker"
      },
      {
        login: "dbvker",
        avatar_url: "https://avatars.githubusercontent.com/u/38574400?v=4",
        html_url: "https://github.com/dbvker"
      },
      {
        login: "dbvker",
        avatar_url: "https://avatars.githubusercontent.com/u/38574400?v=4",
        html_url: "https://github.com/dbvker"
      },
    ]
  }


  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder='Github Handle'/>
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>

    </div>);
  };
}

export default App;
