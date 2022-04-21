import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Cards.css";
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const Cards = () => {

const [ticketDisplay,setTicket] = React.useState([])

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
                setTicket(res.data.data)
            }else{
                window.alert("ERROR")
            }
        })
    }

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  

    return (
        <div>

<List sx={{ width: '100%', width: 1000, bgcolor: 'background.paper', height:500,     marginLeft: "193px" }}>
<tr>
      <th>#</th>
      <th className="heading">First Name</th>
      <th className="heading">Last Name</th>
      <th className="heading">Username</th>
    </tr>
      {ticketDisplay.map((l) => {
        const labelId = `checkbox-list-label-${l._id}`;

        return (
          <ListItem
            key={l._id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(l._id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(l._id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText style={{ textAlign:"center" }} id={labelId} primary={`${l.fullName}`} />
              <ListItemText style={{ textAlign:"center" }} id={labelId} primary={`${l.issue}`} />
              <ListItemText style={{ textAlign:"center" }} id={labelId} primary={`${l.category}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>

       
            <Row xs={1} md={2} className="g-4">


                    <Col>
                        <Card className="card">
                            <Card.Body>
                                {/* <Card.Title>Card title  </Card.Title> */}
                                <Card.Text>
                                    No of Tickets: 0
                                </Card.Text>
                                {/* <Button variant="primary">3M Likes</Button> */}
                                <div>
                                    {/* <FavoriteBorderIcon /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card">
                            <Card.Body>
                                {/* <Card.Title>Card title  </Card.Title> */}
                                <Card.Text>
                                    No of Tickets: 0
                                </Card.Text>
                                {/* <Button variant="primary">3M Likes</Button> */}
                                <div>
                                    {/* <FavoriteBorderIcon /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    )   ;
}

export default Cards; 
