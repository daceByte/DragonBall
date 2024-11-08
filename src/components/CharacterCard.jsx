import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Avatar,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";

const CharacterCard = () => {
  const [character, setCharacter] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      marginTop={1}
      paddingBottom={2}
      sx={{
        backgroundImage: `url(/background-unique.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          padding: 2,
          position: "relative",
          top: 5,
          background: "#ffffff8f",
        }}
      >
        <Box display="flex" justifyContent="center" mt={-6}>
          <img
            alt="User Profile"
            src={character.image}
            style={{
              height: 400,
              position: "relative",
              top: 40,
            }}
          />
        </Box>
        <CardContent sx={{ position: "relative", top: 20 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {character.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {character.gender} | {character.race} | {character.affiliation}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {character.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              Ki: {character.ki}
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              MaxKi: {character.maxKi}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CharacterCard;
