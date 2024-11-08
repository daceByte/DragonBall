import React from "react";
import { Container, Typography, Box, Avatar, Grid, Paper } from "@mui/material";

const AboutContent = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Alejandro Cardenas"
            src="https://media0.giphy.com/media/13mfssn73An6De/giphy.gif"
            sx={{ width: 120, height: 120, mb: 2 }}
          />
        </div>
        <Typography variant="h4" gutterBottom>
          Diego Alejandro Cardenas Espinosa
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Estudiante de programacion web
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Acerca
        </Typography>
        <Typography variant="body1">
          He desarrollado esta pagina con Material UI, La API de Dragon Ball.
          Este proyecto es para programacion web, se pone este texto para
          rellenar la pagina de acerca, supongo.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutContent;
