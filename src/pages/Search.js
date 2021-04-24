import React from 'react';
import { Row, Col, AutoComplete, Input } from 'antd';
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
          <div className="super-spacer"></div>
          <Row>
            <Col span={12} offset={2}>
              <h1>Search</h1>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col span={22} offset={2}>
              <AutoComplete
                options={options}
                // placeholder="Artist, User"
                filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }>
                  <Input.Search size="large"/>
              </AutoComplete>
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={4}>
              <div className="suggestion">
              <small>Don't see you favorite artist listed here. <br/>
          <a>Send us a suggestion</a></small>
              </div>
            </Col>
          </Row>
          
      </div>
      </div>
  );
}