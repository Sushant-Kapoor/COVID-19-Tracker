import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

export interface InfoBoxPropsInterface {
  title: string;
  cases: number;
  total: number;
}

const InfoBox: React.FC<InfoBoxPropsInterface> = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className="infoBox__cases">{cases} today</h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
