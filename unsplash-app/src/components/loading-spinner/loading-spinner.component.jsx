import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height:'100vh',
    justifyContent:"center",
    alignItems:"center",
    "& > * + * ": {
      marginLeft: theme.spacing(2)
    }
  },
  spinner :{
    color:"#3db46d"
  }
}));

export const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner}/>
    </div>
  );
};
