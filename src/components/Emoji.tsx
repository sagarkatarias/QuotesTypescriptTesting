import React from 'react';

type EmojiProps = {
  label?: string;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
  symbol: any;
};

const Emoji = (props: EmojiProps) => (
  <span
    className='emoji'
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
    onClick={props.onClick}
  >
    {props.symbol}
  </span>
);
export default Emoji;
