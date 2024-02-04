import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useGetComentsQuery } from '../../redux/commentApi';

export const Comments = () => {
  const { data: comments } = useGetComentsQuery();

  return (
    <>
      {comments && (
        <Grid>
          {comments.map((comment) => (
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
