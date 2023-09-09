import { List, ListItem, ListItemText } from "@mui/material";

import ListItemButton from '@mui/material/ListItemButton';

type ListMUIprops = {
  list: any[],
  listStyle?: {}
}

// https://mui.com/material-ui/react-list/
const MUIList = (props: ListMUIprops) => {
  const {list, listStyle} = props;

  return (
    <List>
      {list.map((value: any, idx: number) => (
        <ListItem key={idx} disablePadding>
          <ListItemButton sx={listStyle} >
            <ListItemText primary={value} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default MUIList;
/**
 * usage:
 
  const listStyle = {
    border: "1px solid silver",
    minHeight: 80,
  }
  return (
    <ListMUI list={['a', 'b,', 'c', 'd']} listStyle={listStyle}/>
  )

 */