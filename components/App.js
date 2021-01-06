/*
 * @Description: 
 * @Author: wish.WuJunLong
 * @Date: 2020-12-14 15:38:28
 * @LastEditTime: 2020-12-14 15:47:41
 * @LastEditors: wish.WuJunLong
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "公用组件",
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <antd.Button type="primary">Primary</antd.Button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));