import styled from 'styled-components';
import { Modal, Form } from 'react-bootstrap';
import Spinner from '../spinner';

const BlackButton = (type) => `
  background-color: black;
  border-radius: 0;
  padding: 5px 25px;
  color: white;
  border: none;
  ${type === 'detect' && 'height: 100%;'}
`;

export const StyledModal = styled(Modal)`
  .modal-content {
    padding: 30px 50px;
    border-radius: 12px;
  }
  & .btn-primary {
    ${BlackButton('detect')}
  }
  & form {
    display: block;
    input {

    }
  }
  & input[type=submit] {
    ${BlackButton}
  }
  & input[type=text] {
    border-radius: .1rem;
  }
`;

export const StyledTitle = styled(Modal.Title)`
  font-size: 36px;
  font-weight: bold;
`;

export const StyledSpinner = styled(Spinner)`
  width: 20px;
  height: 20px;
`;

export const ErrorText = styled.p`
  color: rgba(220,53,69,.9);
  margin-right: 20px;
  margin-bottom: 0;
`;

export const FormLabel = styled(Form.Label)`
  display: block;
`;

export const TotalPriceText = styled.h3`
  text-align: right;
  font-size: 1.4rem;
`;

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
`;
