import React from 'react';
import '../css/ClearFavorites.css';

type ClearFavoritesProps = {
  setFavoritedIds: (arg0: number[]) => void;
};

const ClearFavorites = ({ setFavoritedIds }: ClearFavoritesProps) => {
  return (
    <button
      className='button'
      onClick={() => setFavoritedIds([])}
    >
      <p>Clear Favorites</p>
    </button>
  );
};

export default ClearFavorites;
