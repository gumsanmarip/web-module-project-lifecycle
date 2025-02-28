import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return (<div id="followers">
            {
                this.props.followers.map(follower=> {
                    return(<Follower follower={follower}/>);
                })
            }
        </div>)
    }
}

export default FollowerList;