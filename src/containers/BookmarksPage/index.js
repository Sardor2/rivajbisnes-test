import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bookmarksSelector } from '../../redux/selectors/articlesSelector';
import { getBookmarks, clearBookmarks } from '../../redux/modules/bookmarks/bookmarksAction';

import { ClampLinesStyled, StyledContainer, Col1 } from '../../components/articleMain/style';

const BookmarksPage = ({ bookmarks, getBookmarks }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      getBookmarks(user.user_id);
    }
    return () => {
      clearBookmarks();
    };
  }, []);
  useEffect(() => {
    setData(bookmarks);
  }, [bookmarks]);
  return (
    <>
      {data.map((article) => (
        <StyledContainer>
          <Col1>
            <h1>
              <Link to={article.route}>
                <ClampLinesStyled
                  text={article.title_uz}
                  id={article.title_uz}
                  lines={2}
                  ellipsis="..."
                  moreText=""
                  lessText=""
                  stopPropagation
                />
              </Link>
            </h1>
          </Col1>
        </StyledContainer>
      ))}
    </>
  );
};

BookmarksPage.defaultProps = {
  bookmarks: [],
  getBookmarks: () => {}
};

BookmarksPage.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  getBookmarks: PropTypes.func
};


const mapStateToProps = (state) => ({
  loading: state.bookmarksReducer.loading,
  bookmarks: bookmarksSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getBookmarks: (userId) => dispatch(getBookmarks(userId)),
  clearBookmarks: () => dispatch(clearBookmarks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksPage);
