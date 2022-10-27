import React from 'react';
import PropTypes from 'prop-types';

function NobelPrize(props) {
    const {winnerList} = props;
  return (
    <ul>
        {winnerList.map(post=>(
            <li>{post.prizes[0].year}</li>
        ))}
    </ul>
  )
}

NobelPrize.propTypes = {
    winnerList: PropTypes.array,
};
NobelPrize.defaultProps = {
    winnerList: [], 
}

export default NobelPrize
