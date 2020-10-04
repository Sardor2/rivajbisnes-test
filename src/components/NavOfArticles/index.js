import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
import {
  StyledContainer,
  Title,
  Wrapper
} from './style';

const NavOfArticles = ({ query, handleChangeFilter }) => {
  const { i18n } = useTranslation();
  return (
    <StyledContainer>
      <Wrapper>
        <Title
          active={query && query.filter === 'createdAt'}
          onClick={() => handleChangeFilter({ ...query, filter: 'createdAt', sortDr: 'ASC' })}
        >
          <h1>{translate('Eng yangi', '', i18n)}</h1>
        </Title>
        <Title
          active={query && query.filter === 'views'}
          onClick={() => handleChangeFilter({ ...query, filter: 'views', sortDr: 'DESC' })}
        >
          <h1>{translate('Mashhur', '', i18n)}</h1>
        </Title>
        <Title
          onClick={() => {}}
        >
          <h1>{translate('Do\'kondan', '', i18n)}</h1>
        </Title>
      </Wrapper>
    </StyledContainer>
  );
};

NavOfArticles.propTypes = {
  handleChangeFilter: PropTypes.func,
  query: PropTypes.objectOf(PropTypes.any)
};

NavOfArticles.defaultProps = {
  handleChangeFilter: () => {},
  query: {}
};

export default NavOfArticles;
