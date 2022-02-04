import React, { useState } from 'react';

import { DatePicker, Space, Radio, Divider } from 'antd';

const { RangePicker } = DatePicker;



const DatePickerPage = () => {
  const [size, setSize] = useState('default');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Space direction="vertical">
        <DatePicker />
        <DatePicker picker="week" />
        <DatePicker picker="month" />
        <DatePicker picker="quarter" />
        <DatePicker picker="year" />
        <Divider />
        <br />

        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="year" />
        <Divider />
        <br />

        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <DatePicker size={size} />
        <DatePicker size={size} picker="month" />
        <RangePicker size={size} />
        <DatePicker size={size} picker="week" />
        <Divider />
        <br />

        <DatePicker bordered={false} />
        <DatePicker picker="week" bordered={false} />
        <DatePicker picker="month" bordered={false} />
        <DatePicker picker="year" bordered={false} />
        <RangePicker bordered={false} />
        <RangePicker picker="week" bordered={false} />
        <RangePicker picker="month" bordered={false} />
        <RangePicker picker="year" bordered={false} />

        <Divider />
      </Space>,

    </>
  );
}
export default DatePickerPage;