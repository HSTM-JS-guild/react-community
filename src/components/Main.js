import React, { Component, Fragment } from 'react';
import { CardDeck, CardBody, Card, CardTitle, CardText, CardFooter} from 'reactstrap';

class Main extends Component{
    state={
        threads: []
    }

    componentDidMount(){
        fetch(`https://api.connectedcommunity.org/api/v2.0/Discussions/GetLatestDiscussionPosts?discussionKey=d9795579-93b5-4f66-977a-2a089b910b79&maxToRetrieve=5`, {
            headers: {
                'HLIAMkey': '9fa9095f-e441-4338-b5fa-65d9e498cbed'
            }
        })
        .then((data)=>{
            return data.json();
        }).then((threadData)=>{
            this.setState({
                threads: threadData,
                loaded: true
            })
        })
    }

    render(){
        return( 
                <div>
                    <h2>Recent Discussions</h2>
                    <DiscussionList loaded={this.state.loaded} threads={this.state.threads} />
                </div>
        )
    }
}

class DiscussionList extends Component{
    render(){
        if (this.props.loaded === true){
        const discussions = this.props.threads.map((post)=>(
            <CardTemplate
                key={post.id}
                id={post.id}
                author={post.Author.DisplayName}
                datePosted={post.DatePosted}
                message={post.BodyWithoutMarkup}
                title={post.Subject}
                link={post.LinkToMessage}
            />
        ));
        return(
            <div>
                <CardDeck>
                    {discussions}
                </CardDeck>
            </div>
        )
    }else{
        return(
            <p>loading error...</p>
        )
    }
}
}


class CardTemplate extends Component{
    render(){
        return(
            <Card>
                <CardBody>
                    <CardTitle>
                        <a href={`${this.props.link}`} > {this.props.title}</a>
                    </CardTitle>
                        <CardText>
                            {`${this.props.message}`}
                        </CardText>
                </CardBody>
                <CardFooter>Posted by: {this.props.author}</CardFooter>
            </Card>
        )
    }
}

export default Main;
