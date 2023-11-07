import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { blueGrey, red } from '@mui/material/colors';
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";

type GlobalHeaderProps = {
  themeColor: string,
  handleOpen: () => void,
}

export const GlobalHeader = (props: GlobalHeaderProps) => {
  const { themeColor, handleOpen } = props;;

  const handleClick = () => {
    handleOpen()
  }

  const router = useRouter();
  const handleMove = (url: string) => {
    router.push(url);
  }

  return (
    <>
      <Grid display={"flex"} justifyContent="space-between" borderBottom={`1px solid ${blueGrey[100]}` } sx={{ backgroundColor: themeColor, boxShadow: "0px 0px 1px 0 rgba(0, 0, 0, 1.0)" }}>
        <Grid display={"flex"} justifyContent="left" alignItems={"center"}>
          <IconButton onClick={() => handleClick()}>
            <AiOutlineMenu className="text-2xl w-6 h-6" />
          </IconButton>
          <IconButton onClick={() => handleMove("")}>
            Logo
          </IconButton>
        </Grid>
        <Grid display="flex" justifyContent={"right"} alignItems="center" marginRight={1}>
          <IconButton onClick={() => handleMove("")}>
            Avator
          </IconButton>
        </Grid>
    
      </Grid>
    
    </>
  );
};