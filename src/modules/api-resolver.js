const BASE_URL = 'https://openlibrary.org/';

const QUERY_BOOK = (query) => {
   return BASE_URL + `search.json?title=${query}`
}

const GET_BOOK_BY_ISBN = (isbn) => {
    return BASE_URL + `isbn/${isbn}.json`
}

const GET_AUTHOR_INFO = (key) => {
    return BASE_URL + `${key}.json`;
}

const GET_AUTHOR_INFO_WEB = (key) => {
    return BASE_URL + `${key}`;
}

export {
    QUERY_BOOK, GET_BOOK_BY_ISBN, GET_AUTHOR_INFO, GET_AUTHOR_INFO_WEB
}