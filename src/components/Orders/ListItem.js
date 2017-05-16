import React, { PropTypes, Component } from 'react';

function ListItem({rowData, sectionID, rowID}){
    return (
      <div key={rowID}
        style={{
          padding: '0.08rem 0.16rem',
          backgroundColor: 'white',
        }}
      >
        <h3 style={{ padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6' }}>
          {rowData.title}
        </h3>
        <div style={{ display: '-webkit-box', display: 'flex' }}>
          <img style={{ height: '1.28rem', marginRight: '0.08rem' }} src={rowData.img} />
          <div style={{ display: 'inline-block' }}>
            <p style={{ margin: 0, marginTop: '0.1rem' }}>{rowData.des}</p>
            <p style={{ marginTop: '0.2rem' }}><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>{rowID}</span>元/任务</p>
          </div>
        </div>
      </div>
    );
}

ListItem.propTypes = {
  rowData: React.PropTypes.object,
  sectionID: React.PropTypes.string,
  rowID: React.PropTypes.string,
}

export default ListItem;
