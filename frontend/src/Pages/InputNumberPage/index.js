import React from 'react';

import { Divider, InputNumber, Space, Select, Cascader ,Button} from 'antd';
import { SettingOutlined } from '@ant-design/icons';


const { Option } = Select;

const InputNumberPage = () => {
  const [value, setValue] = React.useState('99');


  const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
      <Option value="add">+</Option>
      <Option value="minus">-</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );
  return (
    <>
      <InputNumber min={1} max={10} defaultValue={3} />

      <Divider />
      <Space>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} />
        <InputNumber min={1} max={100000} defaultValue={3} />
        <InputNumber size="small" min={1} max={100000} defaultValue={3} />
      </Space>,

      <Divider />


      <Space direction="vertical">
        <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
        <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
        <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
        <InputNumber
          addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
          defaultValue={100}
        />



      </Space>,

      <Divider />

      <InputNumber
        style={{
          width: 200,
        }}
        defaultValue="1"
        min="0"
        max="10"
        step="0.00000000000001"
        stringMode
      />,

      <Divider />

      <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>


    </>
  );
};
export default InputNumberPage;
