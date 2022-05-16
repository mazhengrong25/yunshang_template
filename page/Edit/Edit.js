/*
 * @Author: your name
 * @Date: 2021-01-11 16:38:54
 * @LastEditTime: 2021-01-28 15:11:37
 * @LastEditors: mzr
 * @Description: 编辑示例
 * @FilePath: \yunshang_template\page\Edit\Edit.js
 */
class Edit extends React.Component {
    render() {
        // 多选
        const plainOptions = ['多选内容1', '多选内容2', '多选内容3','多选内容4','多选内容5','多选内容6'];
        // 省市区
        const provinceData = ['zhejiang', 'jiangsu'];
        const cityData = {
            zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
            jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
        };
        const cities = cityData[provinceData[1]];
        
        const countyData = {
            Hangzhou: ['shangcheng','xiacheng','bingjiang'],
        }
        const counties = countyData[cityData[1]];
       
        return(
            <div className="edit_content">

                <div className="content_title">编辑</div>
                
                <div className="content_item">
                    <div className="item_div">
                        <div className="item_com">订单类型</div>
                        <div className="item_operate">
                            <antd.Radio.Group defaultValue={1}>
                                <antd.Radio value={1}>单程</antd.Radio>
                                <antd.Radio value={2}>往返</antd.Radio>
                            </antd.Radio.Group>
                        </div>
                        <div className="item_com">是否启用</div>
                        <div className="item_operate">
                            <antd.Switch 
                            checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                        </div>
                    </div>
                    <div className="item_div">
                        <div className="item_com">单行输入</div>
                        <div className="item_operate">
                            <antd.Input/>
                        </div>
                        <div className="item_com">日期选择</div>
                        <div className="item_operate">
                            <antd.DatePicker />
                        </div>
                        <div className="item_com">单选</div>
                        <div className="item_operate">
                            <antd.Select>
                                <antd.Select.Option value={1}>单选一</antd.Select.Option>
                                <antd.Select.Option value={2}>单选二</antd.Select.Option>
                            </antd.Select>
                        </div>
                        <div className="item_com">范围</div>
                        <div className="item_operate">
                            <antd.DatePicker.RangePicker/>
                        </div>
                    </div>
                    <div className="item_div">
                        <div className="item_com">多选</div>
                        <div className="item_operate">
                            <antd.Checkbox.Group options={plainOptions} defaultValue={'多选内容1'}/>
                        </div> 
                    </div>
                    <div className="item_div">
                        <div className="item_com">联动选择</div>
                        <div className="item_operate">
                            <antd.Select defaultValue={provinceData[0]}>
                                {provinceData.map((province, index) => (
                                     <antd.Select.Option key={province} value={index}>{province}</antd.Select.Option>
                                ))}   
                            </antd.Select>
                            <antd.Select>
                                {cities.map(city => (
                                    <antd.Select.Option key={city}>{city}</antd.Select.Option>
                                ))}
                            </antd.Select>
                            {/* <antd.Select>
                                {counties.map(county => (
                                    <antd.Select.Option key={county}>{county}</antd.Select.Option>
                                ))}
                            </antd.Select> */}
                        </div> 
                    </div>
                    <div className="item_div">
                        <div className="item_com">多行输入</div>
                        <div className="item_operate">
                            <antd.Input.TextArea  />
                        </div> 
                    </div>
                    <div className="item_div">
                        <div className="item_com">上传文件</div>
                        <antd.Upload>
                            <antd.Button>
                                <div className="upload_file">
                                    <div className="img_div"><img src="./static/upload.png"/></div>
                                    <span>上传文件</span> 
                                </div>
                            </antd.Button>
                        </antd.Upload>  
                    </div>
                </div>

                <div className="content_button">
                    <antd.Button>取消</antd.Button>
                    <antd.Button type="primary">确认</antd.Button>
                </div>           
            </div>
        )
    }
}
ReactDOM.render(<Edit />, document.getElementById("edit"));