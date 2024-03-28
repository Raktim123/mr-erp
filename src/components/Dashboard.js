import React from 'react'
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, Chart, LineElement } from "chart.js";
import 'chart.js/auto'


const Dashboard = () => {
  const [state, sueState] = React.useState('')
  return (
    <div className='dashboard-container'>
      <div class="dashboard">
        <div class="gutter--left gutter--right dashboard__wrap">
          <div class="dashboard__group">
            <h2 class="dashboard__label">Dashboard</h2>
            
            <div style={{display: "flex"}}>
              <div className='card report-card' style={{ height: "400px", width: "60%" }}>
                <div className='card-body'>
                  <Bar
                    data={{
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      datasets: [
                        {
                          label: 'Earnings',
                          data: [1000, 1500, 1200, 1800, 2000, 1700, 1600, 1900, 2100, 2200, 2300, 2400],
                          backgroundColor: [
                            'rgba(173, 216, 230, 1)', // Light blue
                            'rgba(152, 251, 152, 1)', // Red
                            'rgba(255, 127, 80, 1)', // Blue
                            'rgba(230, 230, 250, 1)', // Light blue
                            'rgba(255, 215, 0, 1)', // Red
                            'rgba(218, 112, 214, 1)', // Blue
                            'rgba(135, 206, 235, 1)', // Light blue
                            'rgba(250, 128, 114, 1)', // Red
                            'rgba(152, 251, 152, 1)', // Red
                            'rgba(112, 128, 144, 1)', // Light blue
                            'rgba(245, 222, 179, 1)', // Red
                            'rgba(216, 191, 216, 1)', // Blue
                          ],
                        },
                      ],
                    }}
                    
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className='card report-card' style={{ height: "400px", width: "40%" }}>
                <div className='card-body'>
                  <Doughnut
                    data={{
                      labels: ["College 1", "College 1", "College 1", "College 1"],
                      datasets: [
                        {
                          label: 'College Wise Earnings',
                          data: [10000, 10000, 10000, 10000],
                          backgroundColor: [
                            '#FF6384', // Customize colors as needed
                            '#36A2EB',
                            '#FFCE56',
                            '#FF9F40',
                          ],
                        },
                      ],
                  }} options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      legend: {
                        display: true,
                        position: 'bottom',
                      },
                      title: {
                        display: true,
                        text: 'Total Earnings by College',
                        fontSize: 16,
                      },
                  }} />
                </div>
              </div>
            </div>

            {/* <div style={{ display: "flex" }}>
              <div className='card report-card' style={{ height: "400px", width: "70%" }}>
                <div className='card-body'>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard