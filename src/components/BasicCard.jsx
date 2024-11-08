import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ data }) {
  const { name, affiliation, image, ki, maxKi, id } = data;

  return (
    <Card
      sx={{
        width: 275,
        margin: 0,
        padding: 0,
        height: 430,
        backgroundImage: "url(background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
      }}
      onClick={() => {
        window.location.href = "/Character/" + id;
      }}
    >
      <CardContent
        style={{
          backgroundColor: "#20212599",
          width: "100%",
          height: "100%",
          padding: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            srcSet={image}
            src={image}
            style={{
              height: 305,
              zIndex: 9999,
              position: "absolute",
              transition: "transform 0.3s ease",
            }}
            alt={name}
            loading="lazy"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>
        <div style={{ position: "relative", top: 280, padding: 10 }}>
          <Typography
            variant="h5"
            sx={{ color: "#FFF", fontWeight: 600, textDecoration: "underline" }}
          >
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            Base KI: <span style={{ color: "#FF8927" }}>{ki}</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            Total KI: <span style={{ color: "#FF8927" }}>{maxKi}</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            Afiliation: <span style={{ color: "#FF8927" }}>{affiliation}</span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
