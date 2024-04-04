import React, { useEffect } from 'react';

const CompareAlgorithmsChart = ({ metrics }) => {
    useEffect(() => {
        // Check if metrics array is not empty
        if (metrics.length > 0) {
            // Initialize dataPoints array
            let dataPoints = [];
            
            // Populate dataPoints array with metrics data
            metrics.forEach((metric, index) => {
                dataPoints.push({
                    type: "spline",
                    visible: true,
                    showInLegend: true,
                    yValueFormatString: "##.00 milliseconds",
                    name: metric.algorithm,
                    dataPoints: [
                        { label: "Average Waiting Time", y: parseFloat(metric.data.average_waiting_time) },
                        { label: "Average Response Time", y: parseFloat(metric.data.average_response_time) },
                        { label: "Average Turnaround Time", y: parseFloat(metric.data.average_turnaround_time) }
                    ]
                });
            });
            console.log(dataPoints);
            // Create chart configuration object
            const options = {
                theme: "light2",
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "CPU Scheduling Algorithms Comparison",
                    fontFamily: "sans-serif",
                    fontSize: 28,
                    fontWeight: "bold",
                    fontColor: "black"
                },
                axisY: {
                    title: "Time in milliseconds",
                    interval:1
                },
                toolTip: {
                    shared: "true"
                },
                legend: {
                    cursor: "pointer",
                },
                data: dataPoints // Set dataPoints array as data for the chart
            };

            // Render chart using options configuration
            const chart = new window.CanvasJS.Chart("comparisonChart", options);

            return () => chart.destroy(); // Cleanup chart on unmount
        }
    }, []);

    return (
        <div className="w-full h-[700px] bg-gray-100 p-4 rounded-xl">
            <div id="comparisonChart" style={{ height: "100%", width: "100%" }}></div>
        </div>
    );
}

export default CompareAlgorithmsChart;