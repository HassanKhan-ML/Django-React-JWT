import React, { useState } from 'react';
import { Divider, Radio, Space, Input } from 'antd';


const RadioPage = () => {
  const [value, setValue] = useState('1')


  const onChange = (e) => {
    setValue(e.target.value);
  };

  // const [size, setSize] = useState('default');

  // const handleSizeChange = (e) => {
  //   setSize(e.target.value);
  // };
  return (
    <>
      <Radio>Radio</Radio>

      <Divider />

      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>

      <Divider />

      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </Space>
      </Radio.Group>

    </>
  );
}
export default RadioPage;
