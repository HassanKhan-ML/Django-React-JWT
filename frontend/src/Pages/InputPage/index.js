import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import {
  Input,
  Button,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  Tooltip,

} from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import { InfoCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const { Search } = Input;



const InputPage = () => {
  const { Option } = Select;

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  return (
    <>

      <Input placeholder="Basic usage" />

      <br />
      <br />
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
      <br />
      <br />

      <div className="site-input-group-wrapper">
        <Input.Group size="large">
          <Row gutter={8}>
            <Col span={5}>
              <Input defaultValue="0571" />
            </Col>
            <Col span={8}>
              <Input defaultValue="26888888" />
            </Col>
          </Row>
        </Input.Group>
        <br />
        <Input.Group compact>
          <Input style={{ width: '20%' }} defaultValue="0571" />
          <Input style={{ width: '30%' }} defaultValue="26888888" />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
          <Button type="primary">Submit</Button>
        </Input.Group>
        <br />
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            defaultValue="git@github.com:ant-design/ant-design.git"
          />
          <Tooltip title="copy git url">
            <Button icon={<CopyOutlined />} />
          </Tooltip>
        </Input.Group>
        <br />
        <Input.Group compact>
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Input.Search allowClear style={{ width: '40%' }} defaultValue="0571" />
          <Input.Search allowClear style={{ width: '40%' }} defaultValue="26888888" />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <InputNumber />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <DatePicker style={{ width: '50%' }} />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Input style={{ width: '30%' }} defaultValue="input content" />
          <DatePicker.RangePicker style={{ width: '70%' }} />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Select defaultValue="Option1-1">
            <Option value="Option1-1">Option1-1</Option>
            <Option value="Option1-2">Option1-2</Option>
          </Select>
          <Select defaultValue="Option2-2">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
        </Input.Group>
        <br />
        <Input.Group compact>
          <Select defaultValue="1">
            <Option value="1">Between</Option>
            <Option value="2">Except</Option>
          </Select>
          <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
          <Input
            className="site-input-split"
            style={{
              width: 30,
              borderLeft: 0,
              borderRight: 0,
              pointerEvents: 'none',
            }}
            placeholder="~"
            disabled
          />
          <Input
            className="site-input-right"
            style={{
              width: 100,
              textAlign: 'center',
            }}
            placeholder="Maximum"
          />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Select defaultValue="Sign Up" style={{ width: '30%' }}>
            <Option value="Sign Up">Sign Up</Option>
            <Option value="Sign In">Sign In</Option>
          </Select>
          <AutoComplete
            style={{ width: '70%' }}
            placeholder="Email"
            options={[{ value: 'text 1' }, { value: 'text 2' }]}
          />
        </Input.Group>
        <br />
        <Input.Group compact>
          <Select style={{ width: '30%' }} defaultValue="Home">
            <Option value="Home">Home</Option>
            <Option value="Company">Company</Option>
          </Select>
          <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
        </Input.Group>
      </div>

      <br />
      <br />

      <Search placeholder="input search loading default" loading />
      <br />
      <br />
      <Search placeholder="input search loading with enterButton" loading enterButton />
      <br />
      <br />
      <Search placeholder="input search text" enterButton="Search" size="large" loading />

      <br />
      <br />

      <Input
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
      <br />
      <br />
      <Input prefix="￥" suffix="RMB" />
      <br />
      <br />
      <Input prefix="￥" suffix="RMB" disabled />

      <br />
      <br/>

      <TextArea showCount maxLength={100} style={{ height: 120 }} />,


    </>
  );
}
export default InputPage;
