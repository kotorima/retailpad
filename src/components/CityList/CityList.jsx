import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addCites} from '../../store/slices/cityList';
import {addFilials} from '../../store/slices/filialsList';
import fetchRequest from '../../helpers/fetchRequest';
import {getCityList} from '../../helpers/linksForRequests';


function CityList() {
  const dispatch = useDispatch();

  const conversionToArray = (object) => {
    const array = [];

    for(const [key, value] of Object.entries(object)) {
      value.id = key;
      if(value.address) {
        value.name = value.fullname;
      } else {
        value.name = value.city;
      }
      array.push(value);
    }
    return array;
  }

  const dataPars = (object) => {
    const cites = conversionToArray(object);
    let promise;
    let filials = [];
    /* eslint-disable-next-line */
    cites.map(({filial_list}, index) => { 
      promise = new Promise((resolve) => {
        resolve(conversionToArray(filial_list));
      });
      promise.then((resp) => {
        cites[index].filial_list = resp;
        const newArray = [].concat(filials, resp);
        filials = newArray;
        return filials;
      })
    })

    promise.then(() => {
      dispatch(addFilials(filials));
      dispatch(addCites(cites));
    })
  }

  useEffect(() => {
    fetchRequest(getCityList).then(data => dataPars(data));
  }, []);

  return (
    <div style={{background: 'cadetblue'}}>
        <h3>CityList components</h3>
    </div>
  );
}

export default CityList;
