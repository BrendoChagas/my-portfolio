import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";

const Hero = () =>  {

  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up('xs')]: {
      paddingTop: "50px"
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0"
    }
  }))

  const StyledImg = styled("img")(({theme}) => ({
    width: "70%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src= {Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Brendo Chagas</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>

              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Download")}>
                    <ArrowCircleDownIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Contact")}>
                    <AlternateEmailIcon />
                    <Typography>Contact me</Typography>
                </StyledButton>                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero