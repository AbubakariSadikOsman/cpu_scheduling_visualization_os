const executeRoundRobin = (processes, num_of_process, quantum_time, setUpdatedProcesses) => {
    let current_time = 0;
    let remaining_processes = num_of_process;

    while (remaining_processes > 0) {
        for (let i = 0; i < num_of_process; i++) {
            let current_process = processes[i];
            if (current_process.remainingTime > 0) {
                current_process.startTime = current_time;

                // Execute the process for one quantum time or until it completes
                let execution_time = (current_process.remainingTime < Number(quantum_time)) ? current_process.remainingTime : Number(quantum_time);
                current_time += execution_time;
                current_process.remainingTime -= execution_time;

                // If the process completes, update complete time and mark it as completed
                if (current_process.remainingTime === 0) {
                    current_process.completionTime = current_time;
                    remaining_processes--;
                }
            }
        }
    }

    setUpdatedProcesses(processes);
}

export default executeRoundRobin;
