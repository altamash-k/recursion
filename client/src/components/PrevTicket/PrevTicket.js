import axios from 'axios'
import React from 'react'
import './prevTicket.css'

const PrevTicket = ({ setOpenModal }) => {

    const [listDisplay,setList] = React.useState([])
    const [issue,setIssue] = React.useState("pending")

    React.useEffect(()=>{
        submit()
    },[])
    const submit = async(e)=>{
        
        axios.post("http://localhost:8080/api/users/list-ticket",{
            token:localStorage.getItem("token")
        }).then((res)=>{
            console.log(res)
            if(res.data.success){
                console.log(res.data.data)
                setList(res.data.data)
            }else{
                window.alert("ERROR")
            }
        })
    }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>You Raised these Issues Previously</h1>
        </div>
        <div className="body">
        <table id="customers">
        <tr>
            <th>Issue</th>
            <th>Name</th>
            <th>Category</th>
        </tr>
        {listDisplay.map((l)=>
            <tr key={l._id}>
                <td>{l.issue}</td>
                <td>{l.fullName}</td>
                <td>{l.category}</td>
            </tr>
        )}

        
        </table>

        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
        <h2>Your Issue is currently {setIssue}</h2>
      </div>
    </div>
  )
}

export default PrevTicket