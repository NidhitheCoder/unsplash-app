import React from "react";
import "./image-card.styles.modules.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import ModalComponent from "../modal/modal.component";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CustomButton from "../custom-button/custom-button.component";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.spacing(3),
    "&:hover": {
      "& button": {
        display: "block"
      }
    }
  },
  delete: {
    position: "absolute",
    width: "6vw",
    top: theme.spacing(1),
    right: theme.spacing(1),
    borderRadius: theme.spacing(3),
    border: "1px solid #EB5757",
    color: "#EB5757",
    display: "none",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "LowerCase",
    lineHeight: "14.63px"
  },
  cancel: {
    borderRadius: theme.spacing(3),
    height: "55px",
    minWidth: "137px",
    color: "#BDBDBD"
  },
  button: {
    backgrounColor: "#EB5757",
    color: "#fff",
    borderRadius: theme.spacing(3),
    fontSize: "14px",
    fontWeight: 700,
    height: "55px"
  }
}));

const ImageCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Card className={`image-card ${classes.card}`}>
        <div className="background-shade" />
        <CardMedia
          component="img"
          alt={data.title}
          image={data.imgUrl}
          title={data.title}
        />
        <CustomButton
          variant="outlined"
          caption="delete"
          classes={classes.delete}
          onclick={handleOpen}
        />
        <h3> {data.title}</h3>
      </Card>
      <ModalComponent open={open} handleClose={handleClose}>
        <Typography component="h1" variant="h5">
          Are you sure ?
        </Typography>
        <Box mt={3}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="caption">Password</Typography>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                placeholder="***********"
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <CustomButton
                disabled
                caption="Cancel"
                classes={classes.cancel}
                onclick={handleClose}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomButton
                variant="contained"
                classes={classes.cancel}
                color="secondary"
                caption="Delete"
              />
            </Grid>
          </Grid>
        </Box>
      </ModalComponent>
    </div>
  );
};

export default ImageCard;
