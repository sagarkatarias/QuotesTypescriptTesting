import React, { useState, useEffect } from 'react';
import '../css/Card.css';
import Emoji from './Emoji';

type CardProps = {
  author: string;
  quote: string;
  id: number;
  setFavoritedIds: (arg0: { (favoriteIds: number[]): number[] }) => void;
  favoritedIds: number[];
};

const Card = ({
  author,
  quote,
  id,
  setFavoritedIds,
  favoritedIds,
}: CardProps) => {
  const [favorite, setFavorite] = useState(false);
  const HEART_EYES_EMOJI = '😍';
  const EXPRESSIONLESS_EMOJI = '😶';

  useEffect(() => {
    if (favoritedIds.includes(id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [favoritedIds, id]);

  const handleClick = () => {
    if (favoritedIds.includes(id)) {
      // Delete the id of clicked quote from the favorite Array
      setFavoritedIds((favoriteIds: number[]) =>
        favoriteIds.filter((favId: number) => favId !== id)
      );
    } else {
      //  Add the id to the array
      setFavoritedIds((favoriteIds: number[]) => [...favoriteIds, id]);
    }
  };

  return (
    <>
      <div className='card'>
        <div className='flex'>
          <div className='capital-text'>{author}</div>
          <div className='capital-text'>{id}</div>
        </div>
        <div className='flex'>
          <p>{quote}</p>
          <Emoji
            symbol={favorite ? HEART_EYES_EMOJI : EXPRESSIONLESS_EMOJI}
            label={favorite ? 'favorite' : 'not-favorite'}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
