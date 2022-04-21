import axios from 'axios'
import React from 'react'
import './addticket.css'

const AddTicket = ({ setOpenModal }) => {
    const [name,setName] = React.useState("")
    const [issue,setissue] = React.useState("")
    const [category,setcategory] = React.useState("low")

    const submit = async(e)=>{
        e.preventDefault();
        // TODO: check if name and issue are not empty
        console.log(name,issue,category)
        
        axios.post("http://localhost:8080/api/users/add-ticket",{
            fullName:name,issue,category,token:localStorage.getItem("token")
        }).then((res)=>{
            console.log(res)
            if(res.data.success){
                window.alert("SUCCESS")
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
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
        <form action="#">
            <label for="fname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Your name.."
            onChange={(e)=>
                setName(e.target.value)
            }
             />

            <label for="lname">Issue</label>
            <input type="text" id="issue" name="issue" placeholder="Your Issue..." 

            onChange={(e)=>
                setissue(e.target.value)
            }
            />

            <label for="category">Category</label>
            <select id="category" name="category" 
                onChange={(e)=>
                    setcategory(e.target.value)
                }
            >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
            </select>
        </form>

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
          <button onClick={submit} >Continue</button>
        </div>
      </div>
    </div>
  )
}

export default AddTicket