import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'
import '../stylesheets/stylesheet.css'
import Feed from './Feed'

class MyFeeds extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: undefined
        }
    }
    nextVideos = () => {
        const { videos } = this.state
        setTimeout(() => {
            axios({
                url: "https://private-c31a5-task27.apiary-mock.com/videos",
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(result => {
                this.setState({ videos: videos.concat(result.data.videos) })
            }).catch(err => console.log(err))
        }, 500);
    }

    componentDidMount() {
        axios({
            url: "https://private-c31a5-task27.apiary-mock.com/videos",
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(result => {
            this.setState({ videos: result.data.videos })
            console.log(result.data.videos)
        })
    }

    render() {
        const { videos } = this.state
        return (
            <>
                <div className="container p-2" ><h5 style={{ color: 'gray' }}>today</h5><h1>My Feeds</h1></div>
                {videos ?<InfiniteScroll
                    dataLength={videos.length}
                    next={this.nextVideos}
                    hasMore={true}
                    loader={<div className="container text-center p-5"><h4>Loading...<br /> Please wait...</h4></div>}
                >
                    {/* {videos.map((item) => <img src={item.thumbnail_url} />)} */}
                    <div className="container">
                    <div className="row justify-content-around">{videos.map((item,index)=>{
                    return <Feed className="col" video={item} key={index} />})}</div></div>
                </InfiniteScroll>: null}
            </>
        )
    }
}

export default MyFeeds