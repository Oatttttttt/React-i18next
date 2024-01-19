import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export default function ImgMediaCard() {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {t("Paris")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(
            "Paris is the capital and largest city of France, located in the north-central part of the country. Paris is known for its rich history, cultural heritage, art, architecture, and is often referred to as the `City of Light.`"
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{t("Share")}</Button>
        <Button size="small">{t("Learn More")}</Button>
      </CardActions>
    </Card>
  );
}
