const executeRoundRobin = (processes, num_of_processes, setUpdatedProcesses, setAnotherUpatedProcesses) => {
    const quantum_time = parseInt(prompt("Enter the Quantum Time:"));
    if (quantum_time <= 0 || isNaN(quantum_time || quantum_time === null || quantum_time >= 10)) {
        alert("Invalid Quantum Time. Please enter a valid number such that 0 < number <= 10.");
        return;
    }
    
    let current_time = 0;
    let remaining_processes = num_of_processes;
    let updated_processes = [];

    while (remaining_processes > 0) {
        let allProcessesCompleted = true;

        for (let i = 0; i < num_of_processes; i++) {
            let current_process = processes[i];
            if (current_process.remainingTime > 0) {
                allProcessesCompleted = false;
                current_process.startTime = current_time;

                // Execute the process for one quantum time or until it completes
                let execution_time = Math.min(current_process.remainingTime, quantum_time);
                current_time += execution_time;
                updated_processes.push({ ...current_process });
                current_process.remainingTime -= execution_time;
                

                // If the process completes, update completion time and mark it as completed
                if (current_process.remainingTime === 0) {
                    current_process.completionTime = current_time;
                    updated_processes.push({ ...current_process });
                    remaining_processes--;
                }
            }
        }

        // If all processes have remaining time <= 0, break out of the loop
        if (allProcessesCompleted) {
            break;
        }
    }

    setUpdatedProcesses([...processes]); // Trigger state update
    setAnotherUpatedProcesses(updated_processes);
};

export default executeRoundRobin;
