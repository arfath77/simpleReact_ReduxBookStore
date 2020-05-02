import React from 'react';
import {connect} from 'react-redux';

const BooksDetails = ({book}) => {
    if (!book){
        return <div>Please select a book to display its Description</div>
    }
    return (
        <div className="content">
            <h3>Details for: </h3>
            <p>
                Title: <b>{book.title}</b>
                <br/>
                Description: <b>{book.desc}</b>
                <br/>
                Author: <b>{book.author}</b>
                <br/>
                Pages: <b>{book.pages}</b>
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {book:state.selectedBook}
}

export default connect(mapStateToProps)(BooksDetails);