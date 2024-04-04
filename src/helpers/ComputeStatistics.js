const computeStatistics = (selectedAlgorithm, processes, setProcesses) => {
    let total_waiting_time = 0, total_response_time = 0, total_turnaround_time = 0;
    let average_waiting_time = 0, average_response_time = 0, average_turnaround_time = 0;
    const isNonPreemptive = !selectedAlgorithm || selectedAlgorithm === 1 || selectedAlgorithm === 2 || selectedAlgorithm === 3;

    for (let i = 0; i < processes.length; i++) {
        processes[i].waitingTime = processes[i].startTime - processes[i].arrivalTime;
        processes[i].turnaroundTime = processes[i].completionTime - processes[i].arrivalTime;
        total_waiting_time += processes[i].waitingTime;
        total_turnaround_time += processes[i].turnaroundTime;
        if (!isNonPreemptive) {
            processes[i].responseTime = processes[i].startTime - processes[i].arrivalTime;
            total_response_time += processes[i].responseTime;
        }
    }

    average_waiting_time = (total_waiting_time / processes.length).toFixed(2);
    average_response_time = isNonPreemptive ? average_waiting_time : (total_response_time / processes.length).toFixed(2);
    average_turnaround_time = (total_turnaround_time / processes.length).toFixed(2);

    setProcesses(processes);

    return { algorithm: selectedAlgorithm, average_waiting_time, average_response_time, average_turnaround_time };
}

export default computeStatistics;
