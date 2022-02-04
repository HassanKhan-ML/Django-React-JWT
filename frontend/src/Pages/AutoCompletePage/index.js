import React, { useState } from 'react';
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;


const AutoCompletePage = () => {

  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }

    setResult(res);
  };
  const options = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];
  return (
    <>
      <AutoComplete
        style={{
          width: 200,
        }}
        onSearch={handleSearch}
        placeholder="input here"
      >
        {result.map((email) => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AutoComplete>

      <br />
      <br />

      <AutoComplete
        style={{
          width: 200,
        }}
        options={options}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />

    </>
  );
}

export default AutoCompletePage;