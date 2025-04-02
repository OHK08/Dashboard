import React, { useMemo, useState } from 'react';

export default function ExpensiveCalculationDemo({ data = [] }) {
    const [filter, setFilter] = useState('');

    const filteredData = useMemo(() => {
        console.log('Filtering data...');
        return data.filter((item) => item.includes(filter)
        // This line filters the data array based on whether each item includes the filter string.
        );
    }, [data, filter]);

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            <div>
                <h2>useMemo Example</h2>
                <input
                    type="text"
                    placeholder="Filter text"
                    value={filter}
                    onChange={handleChange}
                />
                <p>Filtered data: {filteredData.join(', ')}</p>
            </div>
        </>
    );
}
