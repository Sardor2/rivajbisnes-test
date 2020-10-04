import React from 'react';
import Header from './Header';
import { Container } from './style';
import ItemTitle from './ItemTitle';
import Item from './Item';

const courses = [
  {
    title: 'Introduction',
    data: [
      {
        title: 'Introduction',
        duration: '00:00:00 - 00:04:22',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/1.2-90.jpg'
      }
    ]
  },
  {
    title: 'Foundations of Design Systems',
    data: [
      {
        title: 'Design Systems & Why They Matter',
        duration: '00:04:23 - 00:07:46',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/2-90.jpg'
      },
      {
        title: 'Drawbacks of Design Systems',
        duration: '00:07:47 - 00:08:54',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/3-90.jpg'
      },
      {
        title: 'Team Structure',
        duration: '00:08:55 - 00:10:23',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/4-90.jpg'
      },
      {
        title: 'Who are Design Systems For?',
        duration: '00:10:24 - 00:10:57',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/5-90.jpg'
      },
      {
        title: 'A Practical Example',
        duration: '00:10:58 - 00:12:50',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/6-90.jpg'
      },
      {
        title: 'The Three Pillars of Design Systems',
        duration: '00:12:50 - 00:18:46',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/7-90.jpg'
      }
    ]
  },
  {
    title: 'Developing Styled Components',
    data: [
      {
        title: 'How We Apply CSS & Specificity',
        duration: '00:04:23 - 00:07:46',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/11-90.jpg'
      },
      {
        title: 'How We Apply CSS & Specificity',
        duration: '00:04:23 - 00:07:46',
        image: 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/11-90.jpg'
      },
      {
        title: 'How We Apply CSS & Specificity',
        duration: '00:04:23 - 00:07:46'
      },
      {
        title: 'How We Apply CSS & Specificity',
        duration: '00:04:23 - 00:07:46'
      },
      {
        title: 'How We Apply CSS & Specificity',
        duration: '00:04:23 - 00:07:46'
      }
    ]
  }
];

export default () => (
  <Container>
    <Header />
    {
      courses.map(({ title, data }, index) => (
        <div key={`${index + 1}`}>
          <ItemTitle>{title}</ItemTitle>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            data.map((course, index) => <Item key={`${index + 1}`} {...course} />)
          }
        </div>
      ))
    }
  </Container>
);
