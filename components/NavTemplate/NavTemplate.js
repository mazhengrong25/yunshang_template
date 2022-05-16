/*
 * @Description: 公用组件-导航栏
 * @Author: mzr
 * @Date: 2021-01-19 16:01:17
 * @LastEditTime: 2021-01-19 16:01:17
 * @LastEditors: mzr
 */

function NavTemplate() {
  
    return (
    
      <div className="list_nav">
        <div className="nav_logo">
          <img src="./static/log.png" />
        </div>
        <div className="nav_title">
          <div className="nav_div">
            <span>导航一</span>
          </div>
          {/* <span>导航一</span>
          <span>导航二</span>
          <span>导航三</span>
          <span>导航四</span> */}
        </div>
      </div>
 
    )
  
}

ReactDOM.render(<NavTemplate />, document.getElementById("NavTemplate"));