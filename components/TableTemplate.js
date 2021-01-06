/*
 * @Description: 表格组件
 * @Author: wish.WuJunLong
 * @Date: 2020-12-22 09:18:07
 * @LastEditTime: 2021-01-05 09:37:22
 * @LastEditors: wish.WuJunLong
 */
let tableData = [];
for (let i = 0; i < 50; i++) {
  tableData.push({
    id: i,
    project: "利润中心 - " + i,
    rule: "规则 - " + i,
    schedule: Math.ceil(Math.random() * 100),
    status: Math.ceil(Math.random() * 4),
  });
}

let isModalVisible = false

// function getProgressData(val) {
//   return <Progress percent={val} />
// }

class TableTemplate extends React.Component {
  openModal(){
    isModalVisible = true
    console.log(isModalVisible)
  }
  render() {
    return (
      <div className="table_template"> 
        <div>
          <antd.Table border rowKey="id" dataSource={tableData}>
            <antd.Table.Column title="重要操作" render={(text) => <div onClick={this.openModal}>支付</div>} />
            <antd.Table.Column title="利润中心" dataIndex="project" />
            <antd.Table.Column title="规则" dataIndex="rule" />
            <antd.Table.Column title="有进度" dataIndex="schedule" 
              
            />
            <antd.Table.Column
              title="状态"
              dataIndex="status"
              render={(text) =>
                text === 1
                  ? "进行中"
                  : text === 2
                  ? "暂停中"
                  : text === 3
                  ? "未开始"
                  : text === 4
                  ? "已完成"
                  : text
              }
            />
            <antd.Table.Column
              title="次要操作"
              render={(text) => (
                <div>
                  <div>编辑</div>
                  <div>删除</div>
                </div>
              )}
            />
          </antd.Table>
        </div>


        <antd.Modal title="Basic Modal" visible={isModalVisible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </antd.Modal>

      </div>
    );
  }
}

ReactDOM.render(<TableTemplate />, document.getElementById("HeaderTemplate"));
