/**
 * Created by ngm on 2018/4/25.
 */
import React,{Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            headerList : [
                {
                  name:"CSS3",
                  value:"CSS3",
                  img:"car.svg",
                },
                {
                    name:"H5",
                    value:"H5",
                    img:"car.svg",
                },
                {
                    name:"map",
                    value:"map",
                    img:"car.svg",
                },
                {
                    name:"js",
                    value:"js",
                    img:"car.svg",
                },
                {
                    name:"D3",
                    value:"D3",
                    img:"car.svg",
                },
                {
                    name:"首页",
                    value:"index",
                    img:"car.svg",
                }
            ]
        }
    }

    

    //返回地图
    handleGoMap(name) {
         
    }

    testClick(e){
        console.log("in testClick...");
        console.log(this.myRef)
    }

    render() {
        const {headerList} = this.state;
        return (
            <div className="header">
              <div>
                <div className="header_logo"></div>
                <div className="header_ryxq" ref={ a => this.myRef = a} onClick={this.testClick.bind(this)}>眼中有日月星辰</div>
              </div>

              {
                headerList.map( (hl, index) => {
                  return (
                      <div className="header_list" key={index} onClick={this.handleGoMap.bind(this,hl.value)}> { hl.name } </div>
                  )
                })
              }
            </div>
        );
    }
}

export default Header;
export { Header };
