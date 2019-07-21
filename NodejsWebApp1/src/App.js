import React, { Component } from 'react'
import './App.css'
import DocumentList from './DocumentList'class App extends Component {
    constructor() {
        super()
        this.sate = {
            items: [],
            currentDocument: { text: '', key: '' },
        }
    }
    handleInput = e => {
        console.log('Added')
    }

    deleteDocument = key => {
        const filteredDocuments = this.state.items.filter(document => {
            return document.key !== key
        })
        this.setState({
            items: filteredDocuments,
        })
    }
    addDocument = () => {
        console.log('Dodano dokument')
    }

    modifyDocument = () => {
        console.log('Edytowano dokument')
    }

    render() {
        return (
            <div className="App">
                <DocumentList addDocument={this.addDocument} />
            </div>
        )
    }
} export default App