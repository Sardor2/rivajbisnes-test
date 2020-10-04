import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ViewportProvider } from '../hooks/use-window-size';

import Auth from '../containers/Auth';
import HomePage from '../containers/HomePage';
import BooksPage from '../containers/BooksPage';
import SingleBookPage from '../containers/SingleBookPage';
import CartPage from '../containers/CartPage';
import BookmarksPage from '../containers/BookmarksPage';
import CategoryPage from '../containers/CategoryPage';
import ArticlePage from '../containers/Article';

import NavbarHeader from '../containers/Navbar';
import NavMain from '../containers/Nav';
import Footer from '../components/footer';
import SignUpPage from '../containers/SignUpPage';
import SignInPage from '../containers/SignInPage';
import ProfilePage from '../containers/Profile';
import ForgetPassword from '../containers/ForgetPassword';
import Course from '../containers/Course';
import ScrollToTop from '../hooks/use-scroll-to-top';

import '../assets/fonts/font.css';

const Root = () => (
  <ViewportProvider>
    <Router>
      <Auth render={() => (
        <ScrollToTop>

          <NavbarHeader />
          <NavMain />
          <Switch>
            <Route exact key="r-1" path="/" component={HomePage} />
            <Route exact key="r-2" path="/category/kitoblar" component={BooksPage} />
            <Route exact key="r-3" path="/category/kitoblar/:id" component={SingleBookPage} />
            <Route exact key="r-4" path="/category/:id" component={CategoryPage} />
            <Route exact key="r-5" path="/articles/:slug" component={ArticlePage} />
            {/* <Route exact key="r-4" path="/sign-up" component={SignUpPage} /> */}
            <Route exact key="r-6" path="/login" component={SignInPage} />
            <Route exact key="r-7" path="/forgot-password" component={ForgetPassword} />
            <Route exact key="r-8" path="/my-profile" component={ProfilePage} />
            <Route exact key="r-9" path="/bookmarks" component={BookmarksPage} />
            <Route exact key="r-10" path="/korzina" component={CartPage} />
          </Switch>
          <Footer />

        </ScrollToTop>
      )}
      />
    </Router>
  </ViewportProvider>
);

export default Root;
