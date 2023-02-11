import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export const SidebarContent = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'sample'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'sample'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'sample'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'sample'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'sample'} />
        </ListItemButton>
      </ListItem>

    </List>
  )
}