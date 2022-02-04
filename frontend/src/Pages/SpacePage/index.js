import React, { useState } from 'react';
import { Button, Space, Upload, Popconfirm,Card,Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const SpacePage = () => {
  const [size, setSize] = useState('small');

  return (
    <>
  <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>

      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
       <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
       <Radio value="small">Small</Radio>
       <Radio value="middle">Middle</Radio>
       <Radio value="large">Large</Radio>
     </Radio.Group>
     <br />
     <br />
     <Space size={size}>
       <Button type="primary">Primary</Button>
       <Button>Default</Button>
       <Button type="dashed">Dashed</Button>
       <Button type="link">Link</Button>
     </Space>
     

     </>
  )
};

export default SpacePage;