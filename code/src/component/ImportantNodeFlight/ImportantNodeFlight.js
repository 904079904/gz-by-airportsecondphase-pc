/**
 * Created by zhangqin on 2019/12/10.
 */
import axiosToken from "js/axiosToken";

import './ImportantNodeFlight.scss';
import CountUp from 'react-countup';
import { TitleCom } from "com/index";
import Leave from "img/zyjd_leave.png";
import Safeguard from "img/zyjd_safeguard.png";
import Arrive from "img/zyjd_arrive.png";
import Stay from "img/zyjd_stay.png";
var itemArr = [
    {name: '进港滑行',img: Arrive},
    {name: '保障中',img: Safeguard},
    {name: '出港滑行',img: Leave},
    {name: '过夜停场',img: Stay},
]
export default class ImportantNodeFlight extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: []
        }
    }
    componentDidMount(){
        this.getData();
        this.reloadId = setInterval(()=>{
            this.getData()
        },globalTimer.taxiingFlightCount)
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        axiosToken({
            method: 'get',
            url: realAddressUrlOne + '/pc/taxiingFlightCount',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                let resultArr = [];
                resultArr.push(result.arriveTaxiing);
                resultArr.push(result.safeguard)
                resultArr.push(result.overnight)
                resultArr.push(result.leaveTaxiing)
                this.setState({
                    result: resultArr
                })
            }
        });
    }
    render(){
        let {result} = this.state;
        return(
            <div className="ImportantNodeFlight">
                <TitleCom title="重要节点航班实时概览" />
                <div className="flexCon">
                    {
                        result.map((item, index) => {
                            return (
                                <div className="flexItem" key={index}>
                                    <div className="left">
                                        <div className="inside"></div>
                                        <img src={itemArr[index].img}></img>
                                    </div>
                                    <div className="right">
                                        <p><CountUp end={item} /><i>架次</i></p>
                                        <span>{itemArr[index].name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}