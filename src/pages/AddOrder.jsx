import React, {useEffect} from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Search from '../components/Search/Search';
import addTitlePage from '../helpers/addTitlePage';
import {selectCityList} from '../store/slices/cityList';

function AddOrder({title}) {
  const navigate = useNavigate();
  const cityList = useSelector(selectCityList);
  
  useEffect(() => addTitlePage(title));

  return (
    
    <div>
        <h1>{title}</h1>
        <Search optionList={cityList}/>
        <Button type='button' variant="contained" onClick={() => navigate('/order-list')}>Перейти на Главную страницу</Button>
    </div>
  );
}

AddOrder.defaultProps = {
  title: "",
};

AddOrder.propTypes = {
  title: PropTypes.string,
};

export default AddOrder;