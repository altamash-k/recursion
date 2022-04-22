import React, {useState} from 'react'
import BarChart from './Barchart'
import LineChart from './Linechart'
import PieChart from './Piechart'
import { UserData } from './Data'

const Analytics = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.day),
        datasets: [
          {
            label: "Issues Raised",
            data: UserData.map((data) => data.issueGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
  return (
      <>
        <div style={{ width: 600 }}>
            <BarChart chartData={userData} />
        </div>
        <div style={{ width: 600, marginTop: "5%" }}>
            <LineChart chartData={userData} />
        </div>
        <div style={{ width: 600, marginLeft: "50%", marginTop: "-40%"}}>
            <PieChart chartData={userData} />
        </div>
      </>
  )
}

export default Analytics