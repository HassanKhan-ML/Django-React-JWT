import React from 'react';
import { Cascader, Divider } from 'antd';


const CascaderPage = () => {
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
  const options1 = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20)
        .fill(null)
        .map((_, index) => ({ label: `Number ${index}`, value: index })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];

  const options2 = [
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
  function onChange(value) {
    console.log(value);
  }
  function dropdownRender(menus) {
    return (
      <div>
        {menus}
        <Divider style={{ margin: 0 }} />
        <div style={{ padding: 8 }}>The footer is not very short.</div>
      </div>
    );
  }

  return (
    <>

      <Cascader options={options} onChange={onChange} placeholder="Please select" />

      <br />
      <br />

      <Cascader
        style={{ width: '100%' }}
        options={options1}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
      />

      <br />
      <br />

      <Cascader options={options2} dropdownRender={dropdownRender} placeholder="Please select" />

    </>
  );

}
export default CascaderPage;