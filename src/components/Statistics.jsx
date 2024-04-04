import React from 'react';
import computeStatistics from '../helpers/ComputeStatistics';

const Statistics = ({selectedAlgorithm, processes, setProcesses, executed }) => {
    const statiticsData = computeStatistics(selectedAlgorithm, processes, setProcesses);
    const isNonPreemptive = !selectedAlgorithm || selectedAlgorithm === 1 || selectedAlgorithm === 2 || selectedAlgorithm === 3;
    return (
        <div className='w-[500px] bg-gray-100 px-4 py-4 rounded-xl'>
            { executed && processes.length !== 0 && (
                <>
                    <h2 className='text-[1.4rem] mb-3 font-bold text-center'>Statistics</h2>
                    <div className="w-full text-center">
                        <div className="bg-white">
                            <div className="border border-gray-300 px-4 py-2">
                                <h2 className='text-[1rem] mb-3 font-medium text-center'>Average Waiting Time</h2>
                                <p className='text-[1.4rem] mb-3 font-bold text-center'>
                                    {statiticsData.average_waiting_time}
                                </p>
                            </div>
                            {!isNonPreemptive && (
                                <div className="border border-gray-300 px-4 py-2">
                                    <h2 className='text-[1rem] mb-3 font-medium text-center'>Average Response Time</h2>
                                    <p className='text-[1.4rem] mb-3 font-bold text-center'>
                                        {statiticsData.average_response_time}
                                    </p>
                                </div>
                            )}
                            <div className="border border-gray-300 px-4 py-2">
                                <h2 className='text-[1rem] mb-3 font-medium text-center'>Average Turnaround Time</h2>
                                <p className='text-[1.4rem] mb-3 font-bold text-center'>
                                    {statiticsData.average_turnaround_time}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Statistics;
