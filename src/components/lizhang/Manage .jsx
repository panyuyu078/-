import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar, Icon, Button } from "antd-mobile";
//日期选择器
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./manage.scss";
import { ListChange } from "../../store/action";
class Manage extends Component {
  constructor() {
    super();
    this.state = {
      Tad: 1,
      selectedDay: new Date()
    };
    this.type = [
      "全部",
      "结婚收礼",
      "搬家收礼",
      "诞晨收礼",
      "满月收礼",
      "寿宴收礼",
      "满月收礼",
      "寿宴收礼",
      "寿宴收礼",
      "白事收礼"
    ];
    this.money = [
      "全部",
      "500元以下",
      "500-1000元",
      "1000-5000元",
      "5000-10000元",
      "10000-50000元",
      "50000-100000",
      "100000元以上"
    ];
  }
  // 跳转路由
  return = () => {
    this.props.history.replace("/");
  };



  render() {
    const { Tad } = this.state;
    // console.log(Tad, "idx");
    return (
      <div id="manage">
        <div className="m-hd">
          <NavBar
            mode="light"
            icon={
              <Icon type="left" style={{ width: "80px", height: "50px" }} />
            }
            onLeftClick={() => this.return()}
            rightContent={[
              <Icon
                key="0"
                type="search"
                style={{ width: "20px", height: "40px" }}
              />
            ]}
          >
            <Button type="primary">收礼</Button>
            <Button type="primary">送礼</Button>
          </NavBar>
        </div>
        {/* arial */}
        <div className="m-nav-con">
          <nav className="m-nav">
            <div className="u-type" onClick={this.props.Tad.bind(this, 1)}>
              类别
            </div>
            <div className="u-time" onClick={this.props.Tad.bind(this, 2)}>
              时间
            </div>
            <div className="u-money" onClick={this.props.Tad.bind(this, 3)}>
              金额
            </div>
          </nav>
          <div style={Tad != 0 ? { display: "block" } : { display: "none" }}>
            <div
              className="m-info m-infoType"
              style={Tad == 1 ? { display: "block" } : { display: "none" }}
            >
              <ul>
                {this.type.map((item, idx) => (
                  <li key={idx} onClick={this.props.ChangeList.bind(this,item)}>{item}</li>
                ))}
              </ul>
            </div>
            <div
              className="m-info m-infoTime"
              style={Tad == 2 ? { display: "block" } : { display: "none" }}
            >
              <DayPicker
                initialMonth={new Date()}
                selectedDays={day =>
                  DateUtils.isSameDay(this.state.selectedDay, day)
                }
                onDayClick={this.props.handleDayClick.bind(this)}
              />
              );
            </div>
            <div
              className="m-info m-infoMoney"
              style={Tad == 3 ? { display: "block" } : { display: "none" }}
            >
              <ul>
                {this.money.map((item, idx) => (
                  <li key={idx} onClick={this.props.ChangeList.bind(this,item)}>{item}</li>
                ))}
              </ul>
            </div>
            <Button type="primary" onClick={this.props.Tad.bind(this, 0)}>
              关闭
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = state => {
    console.log(state,'state')
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return {
    // ListChange
    // 选项卡
    Tad(idx) {
      this.setState({
        Tad: idx
      });
    },
    // type //time // money 在消失

     //日期
  handleDayClick(e, day, { selected, disabled }) {
    var year = e.getFullYear();
    var mon = e.getMonth() + 1;
    var day = e.getDate();
    const Date = year + "/" + mon + "/" + day;
    this.setState({
        Tad:0
    })
    this.props.ChangeList(Date,'false')
  },
    ChangeList(v,type){
        console.log(v)
        const action=ListChange(v)
        dispatch(action)
        if(type=='false') return
        this.setState({
            Tad:0
        })
    }

  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Manage);
