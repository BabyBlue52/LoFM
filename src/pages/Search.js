import React from 'react';
import { Row, AutoComplete, Input } from 'antd';
import { AiOutlineArrowLeft } from 'react-icons/ai';
 
const options = [
  { value: 'Ryan Celcuis Sounds' },
  { value: 'The Bootleg Boy' },
  { value: 'The Chilled Cow' },
];

export default function SearchPage(props){
  return (
      <div className="search-backdrop">
      <div className="search-container"> 
          <Row>
            <button className="back-btn" onClick={props.onReturn}>
                <AiOutlineArrowLeft />
            </button>
          </Row>
          <div className="spacer"></div>
          <Row className="justify-center">
              <div className="spacer"></div>
              <AutoComplete
              options={options}
              placeholder="Search Channels"
              filterOption={(inputValue, option) =>
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }>
                  <Input.Search size="large"/>
              </AutoComplete>
          </Row>
      </div>
      </div>
  );
}