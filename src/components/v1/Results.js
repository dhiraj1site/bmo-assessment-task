import React from 'react';
import './Result.css';
import Button from './Button';

export default function Results(props) {
  const {books} = props;
  if(books === 0) {
    return (
      <div className="card">
        No books found, please try searching for another book
      </div>
    )
  }
  if(!books.length) return null;
  return books.map(book => {
    var imageUrl = `https://covers.openlibrary.org/b/isbn/${book._ISBN}-M.jpg`;
    return (
    <div className="card">
      <div className="card__image">
        <img  src={imageUrl} alt={book.title} />
      </div>

      <div className="card__info">
        <h2>{book.title}</h2>
        <p>{book._formattedDate}</p>
        <p><a href={book._author} target='_blank'>Author Info</a></p>
        <p>
        <a href={`https://openlibrary.org/isbn/${book._ISBN}`} target='_blank'>
        <Button type="primary" text="See Details" />
         </a>
        </p>
      </div>
    </div>
    )
  })
}

