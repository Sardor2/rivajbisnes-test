import React from 'react';

import {
    StyledErrorPage,
    ErrorContainer,
    ImageWrapper,
    Text
} from './styles';

import ImageError from '../../assets/images/error.png';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        }
    };

    static getDerivedStateFromError(error) {
        // process the error
        return {
            hasError: true
        }
    };

    componentDidCatch( error, info ) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <StyledErrorPage>       
                    <ErrorContainer>
                        <ImageWrapper>
                            <img src={ImageError} alt="error"/>
                        </ImageWrapper>
                        <Text>The page is lost in space :/ </Text>
                    </ErrorContainer>
                </StyledErrorPage>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
