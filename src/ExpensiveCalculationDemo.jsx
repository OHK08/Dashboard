import React, { useMemo, useState } from 'react'

export default function ExpensiveCalculationDemo({ data }) {
    const [filter, setFilter] = useState('');
    const filteredData = useMemo(() => {
        console.log('Filtering data...');
        return data.filter((item) => item.include(filter));
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
                    placeholder='Filter text'
                    value={filter}
                    onChange={handleChange}
                />
                <p>Filtered data: {filteredData.join(', ')}</p>
            </div>
        </>
    );
}
