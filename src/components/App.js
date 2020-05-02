import React from 'react';
import BooksList from './BooksList';
import BookDetails from './BooksDetails';

const App = () => {
    return (
        <div className="ui container grid" style={{ marginTop: 20}}>
            <div className="ui row">
                <div className="column eight wide" >
                    <BooksList />
                </div>
                <div className="column eight wide" >
                    <BookDetails />
                </div>
            </div>
        </div>
    )
}

export default App;