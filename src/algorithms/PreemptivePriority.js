const executePreemptivePriority = (processes, num_of_process, setUpdatedProcesses) => {
    let current_time = 0;
    let remaining_processes = num_of_process;
    const newProcesses = processes.map(process => ({...process})); // Copy processes array
    const completed = new Array(num_of_process).fill(false);

    while (remaining_processes > 0) {
        let highest_priority = Infinity;
        let highest_priority_index = -1;

        for (let i = 0; i < num_of_process; i++) {
            if (!completed[i] && newProcesses[i].arrivalTime <= current_time && newProcesses[i].priority < highest_priority) {
                highest_priority = newProcesses[i].priority;
                highest_priority_index = i;
            }
        }

        if (highest_priority_index === -1) {
            current_time++;
            continue;
        }

        let current_process = newProcesses[highest_priority_index];
        current_process.startTime = current_time;
        current_process.remainingTime--;

        if (current_process.remainingTime === 0) {
            current_process.completionTime = current_time + 1;
            completed[highest_priority_index] = true;
            remaining_processes--; // Fix variable name here
        }

        current_time++;
    }

    setUpdatedProcesses(newProcesses);
}

export default executePreemptivePriority;

