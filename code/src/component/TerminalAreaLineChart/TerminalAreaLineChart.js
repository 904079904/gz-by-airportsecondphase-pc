/**
 Crate by wanjikun on 19/10/29.
*/
import "./TerminalAreaLineChart.scss";
export default class TerminalAreaLineChart extends Component{
 constructor(props) {
   super(props);
   this.myChart = null;
   this.chartDom = null;
 }

 componentDidMount() {
    const {xData,yData} = this.props;
    this.drawChart(xData,yData);
 }

componentWillReceiveProps(newProps) {
    const {xData,yData} = newProps;
    this.drawChart(xData,yData);
}

 drawChart=(xData,yData)=>{


     // 基于准备好的dom，初始化echarts实例
     this.myChart = echarts.init(this.chartDom);
 
     const seriesData = [];
     const legendName = [];
     const legendColor=[]
     for (let i = 0; i < yData.length; i++) {
        const element = {
            name:yData[i].name,
            symbol:'none',
            stack: '总量',
            type:'line',
            lineStyle:{
                color:yData[i].color
            },
            areaStyle: {
                color:yData[i].areaStylecolor
            },
            data:yData[i].data,
            
        }
         seriesData.push(element);
         legendName.push(yData[i].name);
         legendColor.push(yData[i].color)
     }
     
     // 指定图表的配置项和数据
     let option = {
        // legend: {
        //     data:legendName,
        //     textStyle:{
        //         color:'#fff',
        //         fontSize: 10
        //     },
        //     right:10,
        //     top:0
        // },
        legend: {
            top: 0,
            right: 0,
            itemGap: 7,
            itemWidth: 13,
            itemHeight: 5,
            textStyle: {
              color: "#ffffff"
            },
            data: legendName
        },
        grid:{
            // top:100,
            // left:60,
            left: 0,
            right: 0,
            bottom: '3%',
            top: '16%',
            containLabel: true,
        },
        color:legendColor,
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: xData,
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#6E779D',
                }
            },
            axisLabel:{
                // fontSize:20,
                color: '#6f9cbc',
                fontFamily: 'lcd',
            }
        },
        yAxis: {
            type: 'value',
            nameTextStyle:{
                // fontSize:20
            },
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#6E779D'
                }
            },
            axisLabel:{
                // fontSize:20,
                color: '#6f9cbc',
                fontFamily: 'lcd',
            },
            //网格样式
            splitLine: {
                show: true,
                lineStyle:{
                    color: '#575D83',
                }
            }
        },
        series: seriesData
    };



    
    this.myChart.clear();

     // 使用刚指定的配置项和数据显示图表。
     this.myChart.setOption(option);
    
 }

 render() {
   return(
     <div className={'TerminalAreaLineChart'} ref = {ref => this.chartDom = ref}></div>
   )
 }
}

TerminalAreaLineChart.propTypes = {
    xData:PropTypes.array.isRequired,
    yData:PropTypes.array.isRequired,
}
TerminalAreaLineChart.defaultProps = {}