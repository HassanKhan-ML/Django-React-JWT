import React, { useState } from 'react';
import { Checkbox, Radio, } from 'antd';
import { CheckOutlined, HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';

import { Typography as Typo } from 'antd';

const { Title, Paragraph } = Typo;


const Typography = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
  const [clickTriggerStr, setClickTriggerStr] = useState(
    'Text or icon as trigger - click to start editing.',
  );  return (
    <>
      <h1>Typography</h1>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>


      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomIconStr,
        }}
      >
        {customIconStr}
      </Paragraph>

    </>
  )
};

export default Typography;
