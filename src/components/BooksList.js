import React from 'react';
import {connect} from 'react-redux';
import {selectedBook} from '../action'


class BooksList extends React.Component {

    renderedList() {
        return this.props.books.map( (book) => {
            return (
                <div className="item" key={book.title}>
                    <div className="right floated content">
                        <button 
                            onClick={() => this.props.selectedBook(book)} 
                            className="ui button primary"
                        >Select</button>
                    </div>
                    <div className="content"><p>{book.title}</p></div>
                    
                </div>
            )
        })
    } 
    render() {
        return (
            <div className="ui divided list">{this.renderedList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {books: state.books}
}

export default connect(mapStateToProps, {selectedBook})(BooksList);
