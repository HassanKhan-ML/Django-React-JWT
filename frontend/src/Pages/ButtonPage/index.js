import React from 'react';
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const ButtonPage = ({ history }) => {

  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <br />
      <Space style={{ width: '100%' }}>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>
      <br />
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <br />
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </>
  )
};

export default ButtonPage;
