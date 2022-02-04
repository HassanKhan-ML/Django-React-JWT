import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const AffixPage = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>

      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>,
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>,
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>, <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
    </>
  );
};
export default AffixPage;