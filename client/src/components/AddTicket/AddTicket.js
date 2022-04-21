import axios from "axios";
import React from "react";
import "./addticket.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const AddTicket = ({ setOpenModal }) => {
  const [name, setName] = React.useState("");
  const [issue, setissue] = React.useState("");
  const [category, setcategory] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    // TODO: check if name and issue are not empty
    console.log(name, issue, category);

    axios
      .post("http://localhost:8080/api/users/add-ticket", {
        fullName: name,
        issue,
        category,
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          window.alert("SUCCESS");
        } else {
          window.alert("ERROR");
        }
      });
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="upper-form">
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
        </div>
        <div className="body">
          {/* <form action="#">
            <label for="fname" className='label'>Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Your name.."
            onChange={(e)=>
                setName(e.target.value)
            }
             />

            <label for="lname" className='label'>Issue</label>
            <input type="text" id="issue" name="issue" placeholder="Your Issue..." 

            onChange={(e)=>
                setissue(e.target.value)
            }
            />

            <label for="category" className='label'>Category</label>
            <select id="category" name="category" 
                onChange={(e)=>
                    setcategory(e.target.value)
                }
            >
                <option className='option' value="low">Low</option>
                <option className='option' value="normal">Normal</option>
                <option className='option' value="high">High</option>
            </select>
        </form> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
         <TextField
          id="outlined-textarea"
          name="fullname"
          label="Your Name"
          placeholder="Name"
          multiline
          onChange={(e)=>
            setName(e.target.value)
        }
        />
          <TextField
          id="outlined-multiline-static"
          label="Your Issue"
          name="issue"
          multiline
          rows={5}
          onChange={(e)=>
            setissue(e.target.value)
          }
          // defaultValue="Default Value"
        />
          <TextField
          id="outlined-textarea"
          label="Category"
          name="category"
          placeholder="Category"
          multiline
          onChange={(e)=>
            setcategory(e.target.value)
        }
        />
            
          </Box>
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={submit}>Continue</button> */}
        <Stack direction="row" spacing={2}>
          <Button onClick={() => {
              setOpenModal(false);
            }} variant="outlined" style={{color: "#D73055"}} startIcon={<DeleteIcon />}>
             Delete
          </Button>
          <Button onClick={submit} variant="contained" endIcon={<SendIcon />}>
             Send
          </Button>
        </Stack>
        </div>
      </div>
    </div>
  );
};

export default AddTicket;
