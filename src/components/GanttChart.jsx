// import React, { useEffect } from 'react';

// const GanttChart = ({ processes, executed }) => {
//     useEffect(() => {
//         const chart = new window.CanvasJS.Chart("chartContainer", {
//             animationEnabled: true,
//             exportEnabled: true,
//             title: {
//                 text: "Processes Execution By The CPU",
//                 fontFamily: "sans-serif",
//                 fontSize: 22,
//                 fontWeight: "bold",
//                 fontColor: "black"
//             },
//             axisX: {
//                 title: "Processes"
//             },
//             axisY: {
//                 title: "Time (ms)",
//                 interval: 1,
//             },
//             data: [{
//                 type: "rangeBar",
//                 toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
//                 dataPoints: processes.map((process, index) => ({
//                     x: index + 1,
//                     y: [process.startTime, process.completionTime],
//                     label: `P${process.processId}`
//                 }))
//             }]
//         });
//         chart.render();

//         return () => chart.destroy();
//     }, [processes]);

//     return (
//       <div className="w-[770px] bg-gray-100 p-4 rounded-xl">
//         <div id="chartContainer" className='' style={{height: "100%", width: "100%", display: `${executed? "block": "none"}` }}></div>
//       </div>
//     );
// }

// export default GanttChart;

import React, { useEffect, useRef } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const GanttChart = ({ processes, executed }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && processes.length > 0) {
            const dataPoints = processes.map((process, index) => ({
                x: index + 1,
                y: [process.startTime, process.completionTime],
                label: `P${process.processId}`
            }));

            const options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Processes Execution By The CPU",
                    fontFamily: "sans-serif",
                    fontSize: 22,
                    fontWeight: "bold",
                    fontColor: "black"
                },
                axisX: {
                    title: "Processes"
                },
                axisY: {
                    title: "Time (ms)",
                    interval: 1,
                },
                data: [{
                    type: "rangeBar",
                    toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
                    dataPoints: dataPoints
                }]
            };

            chartRef.current.render(options);
        }
    }, [processes, executed]);

    return (
        <div className="w-[770px] bg-gray-100 p-4 rounded-xl">
            {executed ? (
                <div style={{ height: "400px" }}>
                    <CanvasJSChart options={{}} onRef={(ref) => (chartRef.current = ref)} />
                </div>
            ) : (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <p>Processes have not been executed yet.</p>
                </div>
            )}
        </div>
    );
};

export default GanttChart;
