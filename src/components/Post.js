import React, {Component} from 'react'

class Post extends Component {
    state = {
        isOpen: true
    }

    render () {
        const {comment} = this.props
        const body = this.state.isOpen && <section>{comment.text}</section>
        return (
            <div>
                <h2>
                    {comment.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(comment.date)).toDateString()}</h3>
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
