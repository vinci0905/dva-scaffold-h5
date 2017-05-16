import React, { PropTypes, Component } from 'react';
import { ListView } from 'antd-mobile';
import ListItem from './ListItem';
import styles from './List.less';
import fetch from 'dva/fetch';



class List extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.rData = [];
        this.state = {
          dataSource: ds.cloneWithRows([]),
          isLoading: false,
        };
    }
    componentDidMount(){
      this._refreshData();
    }

    _refreshData(){
      if (this.state.isLoading) {
        return;
      }
      this.setState({ isLoading: true });
      fetch('/api/orders', {method: 'post'})
        .then((response) => response.json())
        .then((rjson) => {
          this.rData = [...this.rData, ...rjson.list];
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        });
    }
    _renderRow(rowData, sectionID, rowID){
      return (
        <ListItem rowData={rowData} sectionID={sectionID} rowID={rowID}/>
      );
    }

    _renderHeader(){
      return (
        <span>header</span>
      );
    }
    _renderFooter(){
      return (
        <div style={{ padding: 30, textAlign: 'center' }}>
          加载中
        </div>
      );
    }

    onEndReached(event) {

      this._refreshData();
     
    }

    render(){
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader}
          renderFooter={this._renderFooter}
          className="am-list"
          pageSize={4}
          scrollRenderAheadDistance={500}
          scrollEventThrottle={20}
          onScroll={() => {  }}
          useBodyScroll
          onEndReached={this.onEndReached.bind(this)}
          onEndReachedThreshold={10}
        />
      );
    }
}

List.propTypes = {
  query: PropTypes.func,
  list: PropTypes.array,
  loading: PropTypes.any
}


export default List;
