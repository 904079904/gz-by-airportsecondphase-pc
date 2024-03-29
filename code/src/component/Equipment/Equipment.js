/**
 Crate by wanjikun on 19/12/11.
*/
import { LadderControlEquipment,BoardingBridgeStatus,BaggageCheckMachineChart } from "com/index";
import './Equipment.scss'
export default class Equipment extends Component{
 constructor(props) {
   super(props);
   this.state = {
    terminal:'T1'
   }
 }

 componentDidMount() {
    let that = this;
    byjc_cq.on(monitorType, function (msg) {
        console.log('msgsg',msg);
        
      if (msg.data.area && msg.data.area === "PC_TA1") {
        that.setState({
            terminal:'T1'
        })
      }
      if (msg.data.area && msg.data.area === "PC_TA2") {
        that.setState({
            terminal:'T2'
        })
      }
    });
 }

 render() {
    let {terminal} = this.state;
   return(
     <div className={'Equipment'}>
        <div className="BaggageCheckMachine">
            <BaggageCheckMachineChart terminal={terminal}></BaggageCheckMachineChart>
        </div>
        <div className="LadderControlEquipment">
            <LadderControlEquipment terminal={terminal}></LadderControlEquipment>
        </div>
        <div className="BoardingBridgeStatus">
            <BoardingBridgeStatus terminal={terminal}></BoardingBridgeStatus>
        </div>
    </div>
   )
 }
}

Equipment.propTypes = {}
Equipment.defaultProps = {}