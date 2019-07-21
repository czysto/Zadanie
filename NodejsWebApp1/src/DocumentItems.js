import React, { Component } from 'react'class DocumentItems extends Component {
    createTasks(_document) {
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        const documentEntries = this.props.entries
        const documentItems = documentEntries.map(this.createDocument)

        return <ul className="theList">{documentItems}</ul>
    }
} export default DocumentItems