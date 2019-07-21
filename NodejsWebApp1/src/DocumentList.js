import React, { Component } from 'react'class DocumentList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className="documentListMain">
                <div className="header">
                    <form onSubmit={this.props.addDocument}>
                        <input
                            placeholder="Document"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add </button>
                    </form>
                </div>
            </div>
        )
    }
} export default DocumentList