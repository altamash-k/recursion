import axios from 'axios'
import React from 'react'
import './prevTicket.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const PrevTicket = ({ setOpenModal }) => {

    const [listDisplay,setList] = React.useState([])

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
    };
    
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24),
      createData('Ice cream sandwich', 237, 9.0, 37),
      createData('Eclair', 262, 16.0, 24),
      createData('Cupcake', 305, 3.7, 67),
      createData('Gingerbread', 356, 16.0, 49),
    ];
    
    
    
  return (
    <div className="modalBackground">
      <div className="modalContainerPrev">
      <div className="upper-form-prev">
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
        </div>
        <div className="body">
        {/* <table id="customers">
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
        </table> */}
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 800, fontSize: "18px"}}>Checkbox</TableCell>
            <TableCell style={{fontWeight: 800, fontSize: "18px"}}>Username</TableCell>
            <TableCell style={{fontWeight: 800, fontSize: "18px"}} align="right">Issues</TableCell>
            <TableCell style={{fontWeight: 800, fontSize: "18px"}} align="right">Category</TableCell>
            <TableCell style={{fontWeight: 800, fontSize: "18px"}} align="right">Status</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {/* {listDisplay.map((l)=>
            <tr key={l._id}>
                <td>{l.issue}</td>
                <td>{l.fullName}</td>
                <td>{l.category}</td>
            </tr>
        )} */}
          {listDisplay.map((l) => (
            <TableRow
              key={l.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          // checked={isItemSelected}
                          inputProps={{
                            // 'aria-labelledby': labelId,
                          }}
                        />
                </TableCell>
              <TableCell style={{fontWeight: 800, fontSize: "16px"}} component="th" scope="row">
                {l.fullName}
              </TableCell>
              {/* <TableCell align="right">{l.fullName}</TableCell> */}
              <TableCell style={{fontWeight: 800, fontSize: "16px"}} align="right">{l.issue}</TableCell>
              <TableCell style={{fontWeight: 800, fontSize: "16px"}} align="right">{l.category}</TableCell>
              <TableCell style={{fontWeight: 800, fontSize: "16px"}} align="right">Pending</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


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
          <button>Continue</button> */}
          <Stack direction="row" spacing={2}>
            <Button onClick={() => {
              setOpenModal(false);
               }} variant="outlined" style={{color: "#D73055", marginTop: "20px"}} startIcon={<DeleteIcon />}>
                Delete
            </Button>
            {/* <Button onClick={submit} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button> */}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default PrevTicket