/**
 Crate by wanjikun on 19/12/11.
*/
import './Luggage.scss';
import {BaggageSort,LuggageCheckPassRate, EachLugUsedFlightNum} from 'com/index'
export default class Luggage extends Component{
 constructor(props) {
   super(props);
    this.state = {
        terminal: 'T2'
    }
 }

 componentDidMount() {
 }

 render() {
    let {terminal} = this.state
   return(
     <div className={'Luggage'}>
        <div className="BaggageSortCom">
            <BaggageSort terminal={terminal} />
        </div>
        <div className="PassRate">
            <LuggageCheckPassRate terminal={terminal} />
        </div>
        <div className="EachLugUsed">
            <EachLugUsedFlightNum  terminal={terminal} />
        </div>
        <div className="BaggageTurntableUsed">行李转盘使用数量小时分布</div>
    </div>
   )
 }
}

Luggage.propTypes = {}
Luggage.defaultProps = {}