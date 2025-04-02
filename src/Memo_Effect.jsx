import React, { useState, useEffect, useMemo } from "react";

export default function CompareUseMemoAndUseEffect() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // ✅ Log every render
    console.log("🔄 Component Rendered");

    // ✅ useMemo calculates square before rendering
    const squaredValue = useMemo(() => {
        console.log("⚡ useMemo: Calculating square...");
        return count * count;
    }, [count]); // Only re-runs when 'count' changes

    // ✅ useEffect calculates square after rendering
    useEffect(() => {
        console.log("✅ useEffect: Square calculated after render");
        console.log(`useEffect → Count: ${count}, Squared: ${count * count}`);
    }, [count]); // Runs after render when count changes

    return (
        <div>
            <h2>useEffect vs useMemo</h2>
            <p>Count: {count}</p>
            <p>Squared (useMemo): {squaredValue}</p>

            {/* Button to change count and trigger both hooks */}
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            {/* Button to trigger re-render without changing count */}
            <button onClick={() => setOtherState(!otherState)}>Re-render Without Changing Count</button>
        </div>
    );
}
