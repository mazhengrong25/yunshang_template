/*
 * @Author: your name
 * @Date: 2021-01-11 10:57:26
 * @LastEditTime: 2021-01-28 18:02:49
 * @LastEditors: mzr
 * @Description: 详情示例
 * @FilePath: \yunshang_template\page\Detail\detail.js
 */

let data = [];
for (let i = 0; i < 2; i++) {
  data.push({
    title:`起飞前30天(720小时)(含)之前`,
    test:`起飞前30天(720小时)(不含)至14天(336小时)(含)`,
    text:`起飞前14天(336小时)(不含)至4小时(含)`,
    content:`起飞前4小时(不含)至航班起飞后`,
    name:`天线宝宝`,
    number:`9995476703554`,
    phone:`15123826971`,
    tel:`-`,
    weixin:`ZLY-UU0001`,
    email:`296324796@QQ.COM`,
    valid:`无效通知`,
    notice:`${Math.ceil(Math.random() * 10)}次`,
    logs:`查看日志`
  });
}

 class Detail extends React.Component {

    render() {
        return (
            <div className="detail_content">
                <div className="content_title">详情页标题</div>
                <antd.Radio.Group butonStyle="solid">
                    <antd.Radio.Button value="a">切换一</antd.Radio.Button>
                    <antd.Radio.Button value="b">切换二</antd.Radio.Button>
                    <antd.Radio.Button value="c">切换三</antd.Radio.Button>
                    <antd.Radio.Button value="d">切换四</antd.Radio.Button>
                </antd.Radio.Group>
                <antd.Table
                    dataSource={data}
                    pagination={false}
                    bordered 
                >
                    <antd.Table.Column
                        title="退票" 
                    >
                       
                    </antd.Table.Column>
                    {/* <antd.Table.Column
                        dataIndex="title"  
                    >
                    </antd.Table.Column> */}
                    {/* <antd.Table.Column dataIndex="test"  />
                    <antd.Table.Column dataIndex="text"  />
                    <antd.Table.Column dataIndex="content"  /> */}
                </antd.Table>
                <div className="content_small_title">内容小标题</div>
                <antd.Table
                    bordered
                    dataSource={data}
                    pagination={false}
                >
                    <antd.Table.Column
                        title="处理状态"
                        dataIndex="condition"
                        render={() => (
                            <div>
                                <antd.Tag color="#F99344">待处理</antd.Tag>
                            </div>
                        )}
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="乘客姓名"
                        dataIndex="name"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="票号"
                        dataIndex="number"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="手机号"
                        dataIndex="phone"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="电话号码"
                        dataIndex="tel"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="微信号码"
                        dataIndex="weixin"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="电子邮箱"
                        dataIndex="email"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="通知次数"
                        dataIndex="notice"
                        render={(text) => (
                            <div><a>{text}</a></div>
                        )}
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="有效通知"
                        dataIndex="valid"
                    ></antd.Table.Column>
                    <antd.Table.Column
                        title="日志信息"
                        dataIndex="logs"
                        render={(text) => (
                            <div><a>{text}</a></div>
                        )}
                    ></antd.Table.Column>
                </antd.Table>
                <div className="content_div">
                    <p>内容小标题</p>
                    {/* <div className="div_content">
                        <div className="div_span">
                            <div className="span_title">联系人</div>
                            <div className="span_content">迪迦</div>
                        </div>
                        <div className="div_span">
                            <div className="span_title">联系手机</div>
                            <div className="span_content">12345678910</div>
                        </div>
                    </div> */}
                   
                    
                        {/* <span>备注</span>
                        <antd.Input placeholder="请输入备注信息" /> */}
                   
                 
                </div>
                <div className="content_button">
                    <antd.Button>返回</antd.Button>
                    <antd.Button type="primary">保存</antd.Button>
                </div>
            </div>
        )
    }

 }
 ReactDOM.render(<Detail />, document.getElementById("detail"));