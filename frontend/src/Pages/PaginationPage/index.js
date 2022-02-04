import React from 'react';
import { Pagination } from 'antd';


const PaginationPage = () => {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
  function showTotal(total) {
    return `Total ${total} items`;
  }
  return (
    <>
      <Pagination defaultCurrent={1} total={50} />-

      <br />

      <Pagination defaultCurrent={6} total={500} />-

      <br />

      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />-

      <br />

      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
        disabled
      />-

      <br />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />-
      <br />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />-
      <br />

      <Pagination size="small" total={50} />-
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />-
    <Pagination size="small" total={50} showTotal={showTotal} />-
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />-

    <br/>

    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />-

    <br />
    
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />-

    <br/>


    <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={total => `Total ${total} items`}
  />-

  <br/>
    </>
  );

}

export default PaginationPage;
