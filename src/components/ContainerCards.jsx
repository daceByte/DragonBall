import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import BasicCard from "./BasicCard";
import { useParams } from "react-router-dom";

export default function ContainerCards() {
  const { race } = useParams();
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState(
    `https://dragonball-api.com/api/characters?limit=8${
      race ? `&race=${race}` : ""
    }`
  );
  const [nextPage, setNextPage] = React.useState("");
  const [previuosPage, setPreviuosPage] = React.useState("");

  React.useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los personajes");
        }
        const data = await response.json();
        setCharacters(data.items || data);
        setNextPage(data.links?.next);
        setPreviuosPage(data.links?.previous);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [url]);

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card
      sx={{
        minWidth: "100%",
        backgroundColor: "#202125",
        marginTop: 1,
        borderRadius: 0,
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          gap: "16px",
          padding: 0,
          paddingBottom: 10,
          paddingTop: 20,
        }}
      >
        {characters &&
          characters.map((element, index) => {
            return <BasicCard key={"P" + index} data={element} />;
          })}
      </CardContent>
      <CardActions
        style={{ justifyContent: "center" }}
        className="container-fluid"
      >
        {!race && (
          <>
            <Button
              disabled={!previuosPage}
              onClick={() => {
                previuosPage ? setUrl(previuosPage) : null;
              }}
              variant="contained"
              color="warning"
              size="small"
            >
              Anterior
            </Button>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => {
              return (
                <Button
                  onClick={() => {
                    setUrl(
                      `https://dragonball-api.com/api/characters?page=${element}&limit=8${
                        race ? `&race=${race}` : ""
                      }`
                    );
                  }}
                  key={index + "a"}
                  color="warning"
                  variant="contained"
                  size="small"
                >
                  {element}
                </Button>
              );
            })}
            <Button
              disabled={!nextPage}
              onClick={() => {
                nextPage ? setUrl(nextPage) : null;
              }}
              color="warning"
              variant="contained"
              size="small"
            >
              Siguiente
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
