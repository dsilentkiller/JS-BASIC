import React from 'react'
import searchBooks from './searchBooks';
import './Search.css';

const Search = () => {
    const[results,setResults] =React.useState(0);

    const handleSearch =(event)=>{
        searchBooks(event.target.value).then(response=>{
            SearchResults(response.docs);
        });
    };
    const resultList = (results || []).map((book)=>
    <tr key ={book.key}>
        <td>{book.title}</td>
        <td>{book.author_name && book.author_name.join(',')}</td>
        <td>{book.first_publish_year}</td>

    </tr>)
  return (
    <div>
        <div className='search-box'>
            <input onChange ={handleSearch} class="search-control" type ="search" placeholder='search here'/>
        </div>
        <h1 className='books'>Search books with hooks</h1>
        <table>
            <thead>
                <tr>
                    <th className='title-col'>Title</th>
                    <th className='author-col'>Author</th>
                    <th className='pub_year'>pub_year</th>
                </tr>
            </thead>
            <tbody>{resultList}</tbody>
        </table>
    </div>
  )
}

export default Search