import React from 'react';
import VideoPlayer from 'react-video-js-player';
import Header from '../../components/Course/Header';
import Sidebar from '../../components/Course/Sidebar';
import { Container, Layout, Body } from './style';

export default () => (
  <Container>
    <Header />
    <Layout>
      <Sidebar />
      <Body>
        <VideoPlayer
          src="https://dev-api.biznesrivoj.uz/files/tommy.mp4"
          poster="https://dev-api.biznesrivoj.uz/files/cartoon.jpg"
          playbackRates={[0.5, 1, 1.5, 2]}
        />
      </Body>
    </Layout>
  </Container>
);
