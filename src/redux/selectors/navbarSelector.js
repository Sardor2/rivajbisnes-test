import { createSelector } from 'reselect';
import { labelToRoute } from '../../utils';

export const navbarList = (state) => state.navReducer.list;

const createFormattedNavbar = (item) => ({
  id: item.id,
  route: `/category/${labelToRoute(item.name)}`,
  label: item.name.toUpperCase()
});

export const navbarSelector = createSelector(
  navbarList,
  (list) => list.map(createFormattedNavbar)
);
