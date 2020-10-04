import { useState, useEffect } from 'react';

export const useCategories = (
  history,
  categories,
  articles,
  getArticles
) => {
  const [activePage, setActivePage] = useState(null);
  const [query, setQuery] = useState({
    categoryId: undefined,
    page: 1,
    sortDr: 'DESC',
    filter: 'createdAt',
    limit: 10
  });

  const init = () => {
    const active = categories.find((i) => i.route === history.location.pathname);
    if (active && active.id) {
      setActivePage(active);
      setQuery({
        categoryId: active.id,
        page: 1,
        sortDr: 'DESC',
        filter: 'createdAt',
        limit: 10
      });
    }
  };

  useEffect(() => {
    init();
  }, [history.location.pathname, categories]);

  useEffect(() => {
    if (query && query.categoryId) {
      getArticles(query);
    }
  }, [query]);

  const handleAddPage = () => {
    const clone = { ...query };
    clone.page += 1;
    setQuery(clone);
  };

  const handleChangeFilter = (query) => {
    setQuery(query);
  };

  return {
    activePage,
    handleAddPage,
    handleChangeFilter,
    query
  };
};
