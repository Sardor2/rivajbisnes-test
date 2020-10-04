import React from 'react';

import { StyledContainer, Row } from './styles';

import IconArrowNext from '../../../assets/icons/next.svg';

const ButtonArrow = (props) => {
    return (
        <StyledContainer {...props}>
            {
                props.seeTopics ? 
                <Row>
                    <span>See All Topics</span> <img src={IconArrowNext} alt="icon-arrow"/> 
                </Row>
                :
                <Row>
                    <span> See All Newsletters </span> <img src={IconArrowNext} alt="icon-arrow"/>
                </Row>
            }
        </StyledContainer>
    )
};

export default ButtonArrow;
