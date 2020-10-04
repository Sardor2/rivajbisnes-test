import React, { useState } from 'react';

import {
  StyledContainer,
  Component,
  TitleContainer,
  Title,
  UrlWrapper,
  UrlContainer,
  Url,
  ButtonsContainer,
  IconContainer,
  PrimaryButton,
  Button,
  IconShare
} from './styles';

import CloseIcon from '../../assets/icons/close.png';
import ShareIcon from '../../assets/icons/share.svg';
import FacebookIcon from '../../assets/icons/facebook-icon-grey.png';
import LinkedInIcon from '../../assets/icons/LinkedIn-Gray.png';
import TwitterIcon from '../../assets/icons/grey-twitter.jpg';

const networks = [
  {
    id: 'fb',
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
    img: FacebookIcon,
    text: 'Facebook'
  },
  {
    id: 'tw',
    shareUrl: 'https://twitter.com/intent/tweet?url=',
    img: TwitterIcon,
    text: 'Twitter'
  },
  {
    id: 'ln',
    shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=',
    img: LinkedInIcon,
    text: 'LinkedIn'
  }
];

const SocialMediaShare = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(networks[0]);


  return (
    <>
      <IconShare src={ShareIcon} onClick={() => setOpen(true)} alt="icon-share" />
      {
        open && (
          <StyledContainer>
            <Component>
              <TitleContainer>
                <span>Share</span>
                <Title>Articles Long Title</Title>
                <img src={CloseIcon} onClick={() => setOpen(false)} alt="close"/>
              </TitleContainer>
              <UrlWrapper>
                <span>URL</span>
                <UrlContainer>
                  <Url>{active.shareUrl + window.location.href}</Url>
                </UrlContainer>
              </UrlWrapper>
              <ButtonsContainer>
                {
                  networks.map((item) => (
                    <li key={item.id}>
                      <Button onClick={() => setActive(item)}>
                        {item.text}
                      </Button>
                    </li>
                  ))
                }
              </ButtonsContainer>
              <IconContainer>
                <img src={active.img} alt="social-media-icons" />
              </IconContainer>
              <PrimaryButton href={active.shareUrl + window.location.href}>
                <span>
                  Connect with
                </span>
                <text>
                  {active.text}
                </text>
              </PrimaryButton>
            </Component>
          </StyledContainer>
        )
      }
    </>
  );
};

export default SocialMediaShare;
