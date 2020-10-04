import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={1}
    width={500}
    height={200}
    viewBox="0 0 500 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ebebeb"
  >
    <circle cx="632" cy="719" r="95" />
    <rect x="15" y="33" rx="0" ry="0" width="189" height="115" />
    <rect x="224" y="37" rx="0" ry="0" width="150" height="8" />
    <rect x="225" y="62" rx="0" ry="0" width="161" height="9" />
    <rect x="225" y="90" rx="0" ry="0" width="85" height="13" />
    <rect x="226" y="125" rx="0" ry="0" width="23" height="10" />
    <rect x="259" y="126" rx="0" ry="0" width="21" height="9" />
  </ContentLoader>
);

export default MyLoader;
