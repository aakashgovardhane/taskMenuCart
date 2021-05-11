import React from 'react'
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ReactPlayer from 'react-player/lazy'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        backgroundColor: 'white',
        border: 'solid 2px brown',
        "text-align": "center",
        "max-height": "70%"
    }
};

class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
            videoModalIsOpen: false
        }
    }
    render() {
        const { video } = this.props
        const { videoModalIsOpen } = this.state
        return (
            <>
                <div className="feed">
                    <div className="d-flex justify-content-center">
                        <i className="bi bi-play" onClick={() => this.setState({ videoModalIsOpen: true })}></i>
                    </div>
                    <img src={video.thumbnail_url} className="card-img-top" alt="Image" />
                    <div className="cardBody container-fluid p-3">
                        <span style={{ color: "blue" }}>New</span><span className="float-right">1 hr ago</span>
                        <h3 className="pt-2">{video.title}</h3>
                        <span>Aakash Govardhane</span>
                    </div>
                </div>
                <Modal
                    isOpen={videoModalIsOpen}
                    style={customStyles}
                >
                    <div >
                        <button type="button" className="close" aria-label="Close" onClick={() => this.setState({ videoModalIsOpen: false })}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 className="tittle">{video.title}</h3>
                        <ReactPlayer url={video.video_url} controls='true' width="80vw" />
                    </div>
                </Modal>
            </>
        )
    }
}

export default withRouter(Feed)