import {combineReducers} from 'redux';

const bookReducer = () => {
    return [
        {title:"Javascrip", pages: 250, author:"Alex", desc:"Basic to Advance JS concept"},
        {title:"React", pages: 350, author:"Stephen", desc:"Using React with JS"},
        {title:"React with Redux", pages: 300, author:"Colt", desc:"Integrating React with Redux"},
        {title:"React with Node", pages: 450, author:"Faizan", desc:"Way to Full Stack Develoment"}
    ]
};

const selectedBookReducer = (selectedBook = null, action) => {
    if (action.type === "BOOK_SELECTED") {
        return action.payload;
    }

    return selectedBook;
};

export default combineReducers({
    books: bookReducer,
    selectedBook: selectedBookReducer
});