import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function BasicGrid() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  React.useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" style={{ paddingTop: "2em" }}>
        <Typography variant="h3" component="h2">
          {t("Language")}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item lg={4} sm={12}>
              <Card />
            </Grid>
            <Grid item lg={4} sm={12}>
              <Card />
            </Grid>
            <Grid item lg={4} sm={12}>
              <Card />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
