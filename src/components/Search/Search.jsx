import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


function Search({optionList}){
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
    if(optionList.length) setValue(optionList[0].name);
    }, [optionList]);

    return (
        <div style={{'margin': '50px' }}>
        {optionList.length ? (
            <Stack spacing={2}>
                <Autocomplete
                    value={value}
                    defaultValue={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    isOptionEqualToValue={(option, val) =>
                        option.name === val.name
                      }
                    options={optionList.map(item => item.name)}
                    renderInput={(params) => (
                    <TextField
                    /* eslint-disable-next-line */
                        {...params}
                        placeholder="Search"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                    )}
                />
            </Stack>
     ) : null}
    </ div>
  );
}

Search.defaultProps = {
    optionList: [],
  };

Search.propTypes = {
    optionList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

export default Search;
