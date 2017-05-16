import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, Button } from 'antd-mobile';

function IndexPage() {
  return (
    <div>
      <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
        rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
      >NavBar</NavBar>
      <Button className="btn" data-seed="logId" onClick={e => console.log(e)}>default 按钮</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
