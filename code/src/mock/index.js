/**
 * 本处是说明：
 * import进行组件导入，export组件同名导出
 * import 组件名称 from '组件路径'
 * export{
 * 组件名称
 * }
 * 每一个组件名称最后必须以,结尾
 */
/* 张琴开始 */
import * as TaxiingFlightCount from './TaxiingFlightCount/mock.TaxiingFlightCount.js';
import * as FltSafeguardAnalyze from './FltSafeguardAnalyze/mock.FltSafeguardAnalyze.js';
import * as PsgEnterOutCount from './PsgEnterOutCount/mock.PsgEnterOutCount.js';
import * as PsgHourlyDistribution from './PsgHourlyDistribution/mock.PsgHourlyDistribution.js';
import * as CarPoolLeisureRate from './CarPoolLeisureRate/mock.CarPoolLeisureRate.js';
import * as PositionUsedInfo from './PositionUsedInfo/mock.PositionUsedInfo.js';
import * as PositionTotalityByBridgeRate from './PositionTotalityByBridgeRate/mock.PositionTotalityByBridgeRate';
import * as LugCheckHourlyCount from './LugCheckHourlyCount/mock.LugCheckHourlyCount';
import * as LugCheckPassList from './LugCheckPassList/mock.LugCheckPassList';
import * as CurrentGateUseCount from './CurrentGateUseCount/mock.CurrentGateUseCount';
import * as BoardingGateHourlyCount from './BoardingGateHourlyCount/mock.BoardingGateHourlyCount';
/* 张琴结束 */
// 万吉坤开始
import * as FltDelaySortieCount from './FltDelaySortieCount/mock.FltDelaySortieCount';
import * as HeaderTime from './HeaderTime/mock.HeaderTime';
import * as HotelRoomLeisureNum from "./HotelRoomLeisureNum/mock.HotelRoomLeisureNum";

// 万吉坤结束

// 昝家威开始
import * as ReleaseRate from './ReleaseRate/mock.ReleaseRate';
import * as PsgSecCheckAnalysis from './PsgSecCheckAnalysis/mock.PsgSecCheckAnalysis';
import * as EnterPsgFlowAnalyze from './EnterPsgFlowAnalyze/mock.EnterPsgFlowAnalyze';
import * as MainStreetFlow from './MainStreetFlow/mock.MainStreetFlow';
import * as ParkLeisureRate from './ParkLeisureRate/mock.ParkLeisureRate';
// 昝家威结束

export {
    /* 张琴开始 */
    TaxiingFlightCount,
    FltSafeguardAnalyze,
    PsgEnterOutCount,
    PsgHourlyDistribution,
    CarPoolLeisureRate,
    PositionUsedInfo,
    PositionTotalityByBridgeRate,
    LugCheckHourlyCount,
    LugCheckPassList,
    CurrentGateUseCount,
    BoardingGateHourlyCount,
    /* 张琴结束 */

    // 昝家威开始
    ReleaseRate,
    PsgSecCheckAnalysis,
    EnterPsgFlowAnalyze,
    MainStreetFlow,
    ParkLeisureRate,
    // 昝家威结束
    // 万吉坤开始
    FltDelaySortieCount,
    HeaderTime,
    HotelRoomLeisureNum,
    // 万吉坤结束
}
