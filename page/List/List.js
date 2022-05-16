/*
 * @Author: mzr
 * @Date: 2021-01-06 10:18:53
 * @LastEditTime: 2021-02-01 18:04:04
 * @LastEditors: mzr
 * @Description: 列表示例
 * @FilePath: \yunshang_template\page\list.js
 */


let dataSource = [];
for (let i = 0; i < 10; i++) {
  dataSource.push({
    id: i,
    profit: `利润中心${Math.ceil(Math.random() * 50)}`,
    tag: `数据字典${i}`,
    rule: `规则${i}`,
    schedule: Math.ceil(Math.random() * 100),
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    status: `进行中`,
    option: false,
  });
}

// console.log(dataSource);
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: 0,
      dataSource: [],
      showDotModal: false,
    };
  }

  componentDidMount (){
    
    this.setState({
      dataSource
    })
  }

  // 日期选择
  dateChange(date, dataString) {
    console.log(date, dataString);
  }

  // 表格导航栏
  tableChange(e) {
    console.log(e);
  }

  render() {
    const rowSelection = {};
    return (
      <div className="content">
        {/* 导航栏 */}
        <div className="list_nav">
          <div className="nav_logo">
            <img src="./static/log.png" />
          </div>
          <div className="nav_title">
            <div className="nav_div">
              <p>
                导航一<span className="drop_down"></span>
              </p>
            </div>
            {/* <div className="nav_div"><span>导航二</span></div>
            <div className="nav_div"><span>导航三</span></div>
            <div className="nav_div"><span>导航四</span></div> */}
          </div>
        </div>
        {/* 折叠栏 */}
        <div className="list_fold">
          <div className="fold_item">
            <div className="item_title">单行输入</div>
            <div className="item_select">
              <antd.Input />
            </div>
          </div>

          <div className="fold_item">
            <div className="item_title">日期选择</div>
            <div className="item_select">
              <antd.DatePicker />
            </div>
          </div>

          <div className="fold_item">
            <div className="item_title">单选</div>
            <div className="item_select">
              <antd.Select>
                <antd.Select.Option value={0}>单选一</antd.Select.Option>
                <antd.Select.Option value={1}>单选二</antd.Select.Option>
              </antd.Select>
            </div>
          </div>

          <div className="fold_item">
            <div className="item_title">范围</div>
            <div className="item_select">
              <antd.DatePicker.RangePicker />
            </div>
          </div>

          <div className="fold_item">
            <div className="item_select">
              <antd.Button type="primary">搜索</antd.Button>
            </div>
          </div>

          {/* 折叠按钮 */}
          <div className="fold_item">
            <div className="item_select">
              <div className="flod_item" onclick={() => this.navOpen()}>
                <span className="down_icon"><img src="./static/down.png" /></span>
              </div>
            </div>
          </div>

          <div className="fold_div">


            <div className="fold_item">
              <div className="item_title">单行输入</div>
              <div className="item_select">
                <antd.Input />
              </div>
            </div>

            <div className="fold_item">
              <div className="item_title">日期选择</div>
              <div className="item_select">
                <antd.DatePicker />
              </div>
            </div>

            <div className="fold_item">
              <div className="item_title">单选</div>
              <div className="item_select">
                <antd.Select>
                  <antd.Select.Option value={0}>单选一</antd.Select.Option>
                  <antd.Select.Option value={1}>单选二</antd.Select.Option>
                </antd.Select>
              </div>
            </div>

          </div>


        </div>
        {/* 表格操作 */}
        <div className="table_action">
          <div className="action_item">
            <div className="action_many">
              <p
                className={this.state.navActive === 0 ? "active" : ""}
                onclick={() => this.tableChange(e)}
              >
                待处理<span>136055</span>
              </p>
              <p className={this.state.navActive === 1 ? "active" : ""}>
                本人锁定<span>136</span>
              </p>
              <p className={this.state.navActive === 2 ? "active" : ""}>
                处理中<span>136</span>
              </p>
              <p className={this.state.navActive === 3 ? "active" : ""}>
                已处理<span>136</span>
              </p>
              <p className={this.state.navActive === 4 ? "active" : ""}>
                通知失败<span>136</span>
              </p>
              <span>
                <antd.Button><span className="upload_icon"><img src="./static/upload.png" /></span>上传文件</antd.Button>
                <antd.Button>批量操作<span className="drop_down"></span></antd.Button>
                <antd.Button>+新增</antd.Button>
              </span>


            </div>

            {/* <div className="action_button">
              <div className="button_upload">上传文件</div>
              <div className="button_batch">批量操作<span className="drop_down"></span></div>
              <div className="button_add">+新增</div>
            </div> */}
          </div>

          {/* 表格 */}
          <antd.Table
            bordered
            rowKey="id"
            rowSelection={rowSelection}
            dataSource={this.state.dataSource}
            pagination={true}
          >
            <antd.Table.Column
              title="重要操作"
              render={() => (
                <div className="table_operate">
                  <antd.Button type="primary" size="small">
                    支付
                  </antd.Button>
                </div>
              )}
            ></antd.Table.Column>
            <antd.Table.Column
              title="有标签"
              dataIndex="tag"
              sorter={(a, b) => a.id - b.id}
              render={(text, render) => (
                <div className="table_tag">
                  <span>{text}</span>
                  <antd.Tag color={render.color}>标签</antd.Tag>
                </div>
              )}
            ></antd.Table.Column>
            <antd.Table.Column
              title="利润中心"
              dataIndex="profit"
              sorter={(a, b) => a.id - b.id}
            ></antd.Table.Column>
            <antd.Table.Column
              title="规则"
              dataIndex="rule"
              sorter={(a, b) => a.id - b.id}
            ></antd.Table.Column>
            <antd.Table.Column
              title="有进度"
              dataIndex="schedule"
              render={(text, render) => (
                <antd.Progress
                  percent={text}
                  strokeColor={render.color}
                  showInfo={false}
                />
              )}
            ></antd.Table.Column>
            <antd.Table.Column title="状态" dataIndex="status"></antd.Table.Column>
            <antd.Table.Column
              title="次要操作"
              render={(render, text, index) => (
                <div className="table_operates">
                  <a>删除</a>
                  <a href="http://192.168.0.86:8088/details.html">详情</a>
                  <a href="http://192.168.0.86:8088/edit.html">编辑</a>
                  <div className="dot" 
                  
                    onClick={() => {
                      let data = this.state.dataSource
                      data[index].option = !data[index].option
                      this.setState({
                        dataSource:data
                      })

                    }}
                  >
                    <div className="operates_dots"></div>
                    <div className="operates_dots"></div>
                    <div className="operates_dots"></div>
                  </div>
                  <div className="open" style={{ display: render.option ? 'block' : 'none' }}>
                    <p>操作1</p>
                    <p>操作2</p>
                    <p>操作3</p>
                  </div>
                </div>
              )}
            ></antd.Table.Column>
          </antd.Table>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("list"));
