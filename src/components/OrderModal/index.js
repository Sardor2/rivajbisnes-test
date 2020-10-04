/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Button, Form, Col
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledModal,
  StyledTitle,
  ErrorText,
  FormLabel,
  TotalPriceText,
  SubmitContainer
} from './style';
import mapLocation from '../../utils/map';
import Spinner from '../spinner';
import { API_URL } from '../../config';
import { saveOrder } from '../../redux/modules/order/orderActions';
import { cartItems, totalIntSelector } from '../../redux/selectors/cartSelector';
import { formatPrice } from '../../utils/string';
import translate from '../../i18n/translate';

const OrderModal = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { i18n } = useTranslation();
  const { user } = useAuth0();

  const dispatch = useDispatch();

  const cart = useSelector(cartItems);
  const productsPrice = useSelector(totalIntSelector);
  const error = useSelector((state) => state.orderReducer.error);
  const sentLoading = useSelector((state) => state.orderReducer.loading);

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(undefined);
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [deliverySources, setDeliverySources] = useState([]);

  // Form state
  const [typeId, setDeliveryTypeId] = useState(1);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [sourceId, setDeliverySourceId] = useState(1);

  const handlePosition = async ({ coords }) => {
    const { longitude, latitude } = coords;
    setLongitude(longitude);
    setLatitude(latitude);
    setLoading(true);
    const result = await mapLocation(longitude, latitude);
    setLocation(result);
    setLoading(false);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handlePosition);
    } else {
      alert('GeoLocation is not supported!');
    }
  };
  const handleDeliveryType = (e, price) => {
    setDeliveryTypeId(parseInt(e.currentTarget.value, 10));
    setDeliveryPrice(price);
  };

  const loadData = async () => {
    const [types, sources] = await Promise.all([
      axios.get(`${API_URL}/deliveryTypes`),
      axios.get(`${API_URL}/deliverySources`)
    ]);
    setDeliveryTypes(types.data);
    setDeliverySources(sources.data);
  };

  const onSubmit = (data) => {
    const { deliverySource, locationString, ...rest } = data;
    const payload = {
      ...rest,
      userId: user.sub,
      latitude,
      longitude,
      sourceId: 3,
      method: 2,
      products: cart.map(({ id, quantity, priceInt }) => ({
        bookId: id,
        quantity,
        price: priceInt
      }))
    };
    console.log(payload);
    dispatch(saveOrder(payload));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StyledModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <StyledModal.Header closeButton>
        <StyledTitle id="contained-modal-title-vcenter">
          {translate('Buyurtma', '', i18n)}
        </StyledTitle>
      </StyledModal.Header>
      <StyledModal.Body>
        {(loading || sentLoading) && <Spinner />}
        {(!loading && !sentLoading) && (
          <Form>
            <Form.Group>
              <Form.Group>
                <FormLabel>{translate('Yetkazib berish turi', '', i18n)}</FormLabel>
                {deliveryTypes.length && deliveryTypes.map(({
                  id,
                  type_kr: typeKr,
                  type_lat: typeLat,
                  price
                }) => (
                  <Form.Check
                    key={id}
                    checked={typeId * 1 === id * 1}
                    onChange={(e) => handleDeliveryType(e, price)}
                    inline
                    type="radio"
                    name="typeId"
                    label={`${i18n.language === 'kr' ? typeKr : typeLat} (${price} so'm)`}
                    value={id}
                    ref={register({ required: true })}
                  />
                ))}
                {errors.deliveryType && <ErrorText>{translate('Tanlash majburiy!', '', i18n)}</ErrorText>}
              </Form.Group>
              <Form.Group>
                <FormLabel>{translate('Yetkazib berish manzili', '', i18n)}</FormLabel>
                <Form.Row>
                  <Col lg={10}>
                    <Form.Control
                      type="text"
                      name="locationString"
                      placeholder="Geomanzilingiz..."
                      readOnly
                      value={location}
                      ref={register({ required: true })}
                    />
                  </Col>
                  <Col lg={1}>
                    <Button onClick={handleGetLocation}>{translate('Aniqlash', '', i18n)}</Button>
                  </Col>
                  {errors.locationString && (
                    <ErrorText>{translate('Manzil kiritilishi zarur!', '', i18n)}</ErrorText>
                  )}
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <FormLabel>{translate('Yetkazish manbasi', '', i18n)}</FormLabel>
                {deliverySources.length && deliverySources.map(({ id, name }) => (
                  <Form.Check
                    key={id}
                    checked={sourceId * 1 === id * 1}
                    onChange={(e) => setDeliverySourceId(e.currentTarget.value)}
                    inline
                    type="radio"
                    name="deliverySource"
                    label={name}
                    value={id}
                    ref={register({ required: true })}
                  />
                ))}
              </Form.Group>
              <TotalPriceText>
                {`${translate(`Umumiy: ${formatPrice(productsPrice + deliveryPrice)}`, '', i18n)}`}
              </TotalPriceText>
            </Form.Group>
          </Form>
        )}
      </StyledModal.Body>
      <StyledModal.Footer>
        <SubmitContainer>
          {error && <ErrorText>{translate('Serverdan xatolik!', '', i18n)}</ErrorText>}
          <Button onClick={handleSubmit(onSubmit)}>{translate('Yuborish', '', i18n)}</Button>
        </SubmitContainer>
      </StyledModal.Footer>
    </StyledModal>
  );
};

OrderModal.defaultProps = {
  onHide: () => {}
};

OrderModal.propTypes = {
  onHide: PropTypes.func
};

export default OrderModal;
