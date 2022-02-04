import React from 'react';
import { Steps, Button, message } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';


const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const StepsPage = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <br />
      <br />

      <Steps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>


      <br/>
      <br/>

      <Steps>
    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>
   

    <br/>
    <br/>

    <Steps current={current}>
    {steps.map(item => (
      <Step key={item.title} title={item.title} />
    ))}
  </Steps>
  <div className="steps-content">{steps[current].content}</div>
  <div className="steps-action">
    {current < steps.length - 1 && (
      <Button type="primary" onClick={() => next()}>
        Next
      </Button>
    )}
    {current === steps.length - 1 && (
      <Button type="primary" onClick={() => message.success('Processing complete!')}>
        Done
      </Button>
    )}
    {current > 0 && (
      <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
        Previous
      </Button>
    )}
  </div>
  </>
  );
}
export default StepsPage;