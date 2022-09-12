import React, { useState, useEffect } from 'react';
import SAMPLE_QUOTES_RESPONSE from 'quotes.sample.json';
import Card from './Card';
import ClearFavorites from './ClearFavorites';

const Quotes = () => {
  // favoritedIds is an array of Ids of quotes which are favorited. Ids are added or removed from this array when an emoji is clicked.
  // This array will help us to filter out favorited or unfavorite quotes
  // I did not use Redux here because its a small App and we can handle passing down props to child components. Otherwise I would create a reducer and dispatch action in respective components
  // But for now I keep all the logic in Quotes component

  const [favoritedIds, setFavoritedIds] = useState([]);
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [nonFavoriteQuotes, setNonFavoriteQuotes] = useState([]);
  // Lets sort the Quotes initially so we dont have to do it after filtering.
  const sortedSampleQuotes = SAMPLE_QUOTES_RESPONSE.quotes.sort(
    (a, b) => a.id - b.id
  );
  // considering that id is unique I will divide the sample quotes into 2 arrays of favorite quotes and non favorite quotes everytime a new quote is favorited or unfavorited

  useEffect(() => {
    if (favoritedIds.length > 0) {
      setFavoriteQuotes(
        sortedSampleQuotes.filter((quotes) => favoritedIds.includes(quotes.id))
      );
      setNonFavoriteQuotes(
        sortedSampleQuotes.filter((quotes) => !favoritedIds.includes(quotes.id))
      );
    }
  }, [favoritedIds, sortedSampleQuotes]);

  return (
    <>
      {!favoritedIds.length ? (
        <div>
          <h1>Quotes</h1>
          {sortedSampleQuotes.map(({ author, id, quote }) => (
            <div key={id}>
              <Card
                author={author}
                quote={quote}
                id={id}
                setFavoritedIds={setFavoritedIds}
                favoritedIds={favoritedIds}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Favorites</h1>
          {favoriteQuotes.map(({ author, id, quote }) => (
            <div key={id}>
              <Card
                author={author}
                quote={quote}
                id={id}
                setFavoritedIds={setFavoritedIds}
                favoritedIds={favoritedIds}
              />
            </div>
          ))}
          <ClearFavorites setFavoritedIds={setFavoritedIds} />
          {nonFavoriteQuotes.length && <h1>Quotes</h1>}
          {nonFavoriteQuotes.map(({ author, id, quote }) => (
            <div key={id}>
              <Card
                author={author}
                quote={quote}
                id={id}
                setFavoritedIds={setFavoritedIds}
                favoritedIds={favoritedIds}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Quotes;
