import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { useRouter } from "next/navigation";
import {AiOutlineMail} from 'react-icons/ai';

type Props = {
  handleClose: () => void
}

export const SidebarContent = (props: Props) => {
  const { handleClose } = props;
  const router = useRouter();

  const handleMove = (url: string) => {
    router.push(url);
    handleClose();
  }

  return (
    <List>
      <Toolbar />
      <Divider />

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMove('')}>
          <ListItemIcon>
            <AiOutlineMail />
          </ListItemIcon>
          <ListItemText primary={'プロフィール設定'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMove('/')}>
          <ListItemIcon>
            <AiOutlineMail />
          </ListItemIcon>
          <ListItemText primary={'アカウント設定'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AiOutlineMail />
          </ListItemIcon>
          <ListItemText primary={'ログアウト'} />
        </ListItemButton>
      </ListItem>

    </List>
  )
}