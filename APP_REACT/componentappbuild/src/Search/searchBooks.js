import React from 'react'

const searchBooks = (query) => {
    const baseUrl = 'http://openlibrary.org';
    const url = new URL(baseUrl +'/search.json');
    url.searchParams.append('title',query);
    return fetch(url).then(response =>response.json())
  return (
    <div>
       
    </div>
  )
}

export default searchBooks