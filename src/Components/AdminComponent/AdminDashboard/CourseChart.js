import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
// import { barChartData } from '../../../Fakedata'
import axios from 'axios'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement
)
function CourseChart() {
    const [data, setData] = useState({});


    // const options = { barChartData }
    useEffect(() => {
        axios.get('http://localhost:3003/course')
        .then(response => {console.log(response.data)})
        //       .then(response => {
        //         const data = response.data;
        //         setData({
        //             labels: data.map(item => item.month),
        //             datasets: [
        //                 {
        //                     label: 'Courses Posted',
        //                     backgroundColor: 'rgba(75,192,192,1)',
        //                     borderColor: 'rgba(0,0,0,1)',
        //                     borderWidth: 2,
        //                     data: data.map(item => item.count),
        //                 },
        //             ],
        //         });
        //     })
        .catch(error => {console.log(error)})
        // axios.get('http://localhost:3003/course')
        //     .then(response => {
        //         const data = response.data;
        //         setData({
        //             labels: data.map(item => item.month),
        //             datasets: [
        //                 {
        //                     label: 'Courses Posted',
        //                     backgroundColor: 'rgba(75,192,192,1)',
        //                     borderColor: 'rgba(0,0,0,1)',
        //                     borderWidth: 2,
        //                     data: data.map(item => item.count),
        //                 },
        //             ],
        //         });
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
    }, []);


    return (
        <div>
            {/* <Bar
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Courses Posted Per Month',
                        fontSize: 20,
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            precision: 0,
                        },
                    },
                }}
            /> */}
        </div>
    )
}

export default CourseChart



//Corrected file

//import React, { useState, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2'
// // import { barChartData } from '../../../Fakedata'
// import axios from 'axios'

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarController,
//     BarElement
// } from 'chart.js'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarController,
//     BarElement
// )
// function CourseChart() {
//     const [data, setData] = useState({});


//     // const options = { barChartData }
//     useEffect(() => {
//         axios.get('http://localhost:3003/course')
//         .then(response => {
//             console.log(response.data)
//             setData(response.data)
//         })
        
//         //       .then(response => {
//         //         const data = response.data;
//         //         setData({
//         //             labels: data.map(item => item.month),
//         //             datasets: [
//         //                 {
//         //                     label: 'Courses Posted',
//         //                     backgroundColor: 'rgba(75,192,192,1)',
//         //                     borderColor: 'rgba(0,0,0,1)',
//         //                     borderWidth: 2,
//         //                     data: data.map(item => item.count),
//         //                 },
//         //             ],
//         //         });
//         //     })
//         .catch(error => {console.log(error)})
//         // axios.get('http://localhost:3003/course')
//         //     .then(response => {
//         //         const data = response.data;
//         //         setData({
//         //             labels: data.map(item => item.month),
//         //             datasets: [
//         //                 {
//         //                     label: 'Courses Posted',
//         //                     backgroundColor: 'rgba(75,192,192,1)',
//         //                     borderColor: 'rgba(0,0,0,1)',
//         //                     borderWidth: 2,
//         //                     data: data.map(item => item.count),
//         //                 },
//         //             ],
//         //         });
//         //     })
//         //     .catch(error => {
//         //         console.error('Error fetching data:', error);
//         //     });
//     }, []);

//     const barData = {
//         datasets: [{
//             label: 'Courses Posted Per Month', 
//             data: data
//         }]
//     }

//     const barOptions = {
//         parsing: {
//             xAxisKey: 'labels',
//             yAxisKey: 'course'
//         }
//     };
      
//     return (
//         <div>
//             <Bar data={barData} options={barOptions}/>          
//         </div>
//     )
// }

// export default CourseChart
