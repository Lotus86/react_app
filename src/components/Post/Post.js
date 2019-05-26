import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Post extends Component {
    state = {
        isOpen: true
    }

    render () {
        const {comment} = this.props
        const body = this.state.isOpen && <section>{comment.text}</section>
        return (
            <div className="jumbotron w-auto">
                <h2>
                    {comment.title}
                    <button onClick={this.handleClick} className="float-right btn-primary">
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </h2>
                <div className="container m-lg-5">
                    {body}
                </div>
                <h6 className="float-right">
                    Сreation date: {(new Date()).toDateString()}
                </h6>
            </div>
        )
    }

    handleClick = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }
}

export default Post
