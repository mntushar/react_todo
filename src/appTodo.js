import { Fragment } from 'react';
import { Button, InputGroup, } from 'react-bootstrap';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { gql, useQuery } from '@apollo/client';
import { ListItemIcon, ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';


function App() {
  const {loading, error, data} = useQuery(gql`
    {
      todoList{
        id
        date
        text
      }
    }
  `);
  
  return (
    <Fragment className="todoApp container-fluid">
      <h1 className="text-primary text-center pt-3">Todo App</h1>
      <div className="row">
        <div className="col-xl-4 m-auto">
          <InputGroup className="mb-3">
            <input className="form-control" placeholder="Add Todo"/>
            <Button className="btn btn-primary">Add</Button>
          </InputGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 m-auto">
          <List>
          {data?.todoList?.map((item, ind)=>(
            <ListItem button key={ind}>
              <ListItemIcon>
                <Avatar>
                 {ind + 1}
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item?.text}>

              </ListItemText>
            </ListItem>
          ))}
          </List>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
