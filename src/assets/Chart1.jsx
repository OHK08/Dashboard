// import React, { useState, useEffect } from "react";

// const Chart1 = ({ isDarkMode,  }) => {
//   useEffect(() => {
//     var chart1 = new CanvasJS.Chart("chartContainer1", {
//       backgroundColor: isDarkMode ? "black" : "white",
//       animationEnabled: true,
//       title: {
//         text: "Analytics",
//         horizontalAlign: "left"
//       },
//       data: [{
//         type: "doughnut",
//         startAngle: 60,
//         indexLabelFontSize: 17,
//         indexLabel: "{label} - #percent%",
//         toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//         dataPoints: [
//           { y: 21, label: "Left", color: "black" },
//           { y: 45, label: "Done", color: "aquamarine" },
//           { y: 34, label: "In-progress", color: "cadetblue" }
//         ]
//       }]
//     });

//     chart1.render();
//   }, [isDarkMode]); // Re-render chart on dark mode toggle

//   return <div id="chartContainer1" style={{ height: "300px", width: "100%" }} />;
// };

// export default Chart1;
