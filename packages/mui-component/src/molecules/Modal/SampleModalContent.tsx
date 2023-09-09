import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SampleModalContent = () => {

  return (
    <Grid sx={{  marginLeft: 10, marginRight:10 }}>

      <Grid padding={2}>
        <Typography variant="h4" fontWeight="bold" borderBottom={"1px solid silver"}>test</Typography>
        
        <Grid margin={4}>
          <Box> aaaa</Box>
          <Box> aaaa</Box>
          <Box> aaaa</Box>
        </Grid>
      </Grid>

      <Grid padding={2} >
        <Typography variant="h4" fontWeight="bold" borderBottom={"1px solid silver"}>sample</Typography>

        <Grid margin={4}>
          <Box> aaaa</Box>
          <Box> aaaa</Box>
          <Box> aaaa</Box>
        </Grid>
      </Grid>

      <Grid padding={2} > 
        <Typography variant="h4" fontWeight="bold" borderBottom={"1px solid silver"}>sample</Typography>

        <Grid margin={4}>
          <Grid display={'flex'}>
            <Box width={200}>aaa</Box>
            <Box>bbb</Box>
          </Grid>
          <Grid display={'flex'}>
            <Box width={200}> aaaaaaa</Box>
            <Box>bbb</Box>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}