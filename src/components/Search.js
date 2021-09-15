import React, { useState, useEffect, useRef, useReducer } from 'react';
import "./Search.css";
import {SEARCH_PLACEHOLDER} from '../constants';
import Results from './v1/Results';
import Button from './v1/Button';
import { QUERY_BOOK, GET_BOOK_BY_ISBN, GET_AUTHOR_INFO, GET_AUTHOR_INFO_WEB } from '../modules/api-resolver';
import apiCaller from '../modules/api-caller';
import Loader from './v1/Loader';

export default function Search(props) {

    const [loading, setLoading] = useState(false);
    const [_, updateState] = useReducer((x) => x + 1, 0);

    function useStateRef(initialValue) {
        const [value, setValue] = useState(initialValue);
        
        const ref = useRef(value);
        
        useEffect(() => {
            ref.current = value;
        }, [value]);
        
        
        return [value, setValue, ref];
    }
    
    const [books, setBooks, _books] = useStateRef([]);

    useEffect(() => {
        window.addEventListener('keypress', e => {
            if(e.key == "Enter") {
                var searchInput = document.getElementById('searchBar');
                var isFocused = (document.activeElement === searchInput);
                if(isFocused) {
                    search();
                }
            }
        });
        document.getElementById("dangerClearButton").addEventListener("click", (e) => {
            setBooks([]);
            setLoading(false);
            document.getElementById('searchBar').value = '';
        });
        document.getElementById("selector").addEventListener("change", (e) => {
            var sortOption = e.target.value; 
            if(sortOption === "titlesort") {
                _books.current.sort(function(a, b){
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;
                })
                setBooks(_books.current);
                updateState();
            }   

            if(sortOption === "datesort") {
                _books.current.sort(function(a, b){
                    if(a._formattedDate < b._formattedDate) { return -1; }
                    if(a._formattedDate > b._formattedDate) { return 1; }
                    return 0;
                })
                setBooks(_books.current);
                updateState();            
            }

            if(sortOption === "lengthsort") {
                _books.current.sort(function(a, b){
                    if(a.revision < b.revision) { return -1; }
                    if(a.revision > b.revision) { return 1; }
                    return 0;
                })
                setBooks(_books.current);
                updateState();            
            }
          });
    }, []);



    async function search() {
        var booksFromApi = [];
        var searchTerm = document.getElementById('searchBar').value;
        if(!searchTerm.length > 0) return;
        setBooks([]);
        setLoading(true);
        var queryResult = await apiCaller(QUERY_BOOK(searchTerm));
        var docs = queryResult.docs;
        // slicing the docs to get a constant result
        docs = docs.slice(0,20);
        for(const doc of docs) {
            if(doc && doc.isbn) {
                var ISBN = doc.isbn[0];
                var book = await apiCaller(GET_BOOK_BY_ISBN(ISBN));
                // getting CORS restriction for author endpoint :(
                // so just getting a link with author info ideally I would use GET_AUTHOR_INFO
                if(book) {
                    if(book.authors) {
                        var authorKey = book.authors[0].key;
                        book._author = GET_AUTHOR_INFO_WEB(authorKey);
                    }
                    book._ISBN = ISBN;
                    if(book.publish_date) {
                        try {
                            book._formattedDate = new Date(book.publish_date).toISOString().split('T')[0];
                        }
                        catch(err) {
                            book._formattedDate = book.publish_date;
                        }
                    }
                    booksFromApi.push(book);
                }
            }
        }
        if(booksFromApi.length === 0) {
            booksFromApi = 0;
        }
        setBooks(booksFromApi);
        setLoading(false);
    }

    return (
         <main>
             <div className="search">
                <label htmlFor="searchBar" value={SEARCH_PLACEHOLDER} />
				<input name="search" required type="text" id="searchBar" placeholder={SEARCH_PLACEHOLDER}  />
                <Button onClick={search} text="Search" id="searchButton" type="primary-right" />
			</div>
            <Results books={books} />
            {loading ? <Loader /> : ''}
        </main>
    )
}