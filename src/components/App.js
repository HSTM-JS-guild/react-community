import React from 'react';
import Axios from 'axios';
import Title from './Title';
import MessageList from './MessageList';

var communityApi = Axios.create({
    baseURL: 'https://api.connectedcommunity.org/api/v2.0/',
    timeout: 1000,
    headers: {'HLIAMKey': '9fa9095f-e441-4338-b5fa-65d9e498cbed'}
  });

class App extends React.Component {
    state = {
      title: { DiscussionName : "" },
      messages: []
    };
    handleClick = event => {
        event.preventDefault();
        communityApi.get('Discussions/GetLatestDiscussionPosts?discussionKey=d9795579-93b5-4f66-977a-2a089b910b79&maxToRetrieve=10')
        .then(resp => {
          this.setState({ messages: resp.data });
        });
      };
    componentDidMount(){
        communityApi.get('Discussions/GetDiscussion?discussionKey=d9795579-93b5-4f66-977a-2a089b910b79')
        .then(resp => {
          this.setState({ title: resp.data });
        });
    }
    render() {
      return (
        <div>
          <Title title={this.state.title.DiscussionName} />
          <MessageList messages={this.state.messages} />
          <button onClick={this.handleClick}>Refresh</button>
        </div>
      );
    }
  }

export default App;