import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AppLayout from './Layout/app';

function App() {
  return (
    <div className="App">
     <AppLayout />
    </div>
  );
}
export default App;



{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}


// import { DatePicker } from 'antd';
// import { Typography } from 'antd';
// import { Divider } from 'antd';
// import { Row, Col } from 'antd';

// const { Title } = Typography;

// <DatePicker />
// <Title>h1. Ant Design</Title>
// <Title level={2}>h2. Ant Design</Title>
// <Title level={3}>h3. Ant Design</Title>
// <Title level={4}>h4. Ant Design</Title>
// <Title level={5}>h5. Ant Design</Title>

// <p>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
//   probare, quae sunt a te dicta? Refert tamen, quo modo.
// </p>
// <Divider>Text</Divider>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
//   probare, quae sunt a te dicta? Refert tamen, quo modo.
// </p>
// <Divider orientation="left" orientationMargin="0">
//   Left Text with 0 orientationMargin
// </Divider>    <p>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
//   probare, quae sunt a te dicta? Refert tamen, quo modo.
// </p>
// <Divider orientation="right" orientationMargin={50}>
//   Right Text with 50px orientationMargin
// </Divider>

// <Row>
//   <Col span={18} push={6}>
//     col-18 col-push-6
//   </Col>
//   <Col span={6} pull={18}>
//     col-6 col-pull-18
//   </Col>
// </Row>,