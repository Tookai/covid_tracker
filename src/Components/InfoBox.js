import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../Style/InfoBox.css";

function InfoBox({ title, cases, active, total, ...props }) {
  return (
    <Card className={`infobox ${active && "infoBox--selected"}`} onClick={props.onClick}>
      <CardContent>
        <Typography className="infobox__title" color="textPrimary">
          {title}
        </Typography>
        <h2 className="infobox__cases">
          +{cases} <small> today </small>
        </h2>
        <Typography className="infobox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
