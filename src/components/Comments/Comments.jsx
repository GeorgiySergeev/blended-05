import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useGetComentsQuery } from '../../redux/commentApi';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';

export const Comments = () => {
  const { data: comments } = useGetComentsQuery();
  const filter = useSelector(selectFilter)
  function filterComments() {
    return comments.filter((item)=>item.content.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <>
      {comments && (
        <Grid>
          {filterComments().map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Grid>
      )}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
