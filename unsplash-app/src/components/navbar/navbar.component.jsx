import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddPhoto from "../addPhoto/addPhoto.component";
import Search from "../search/search.component";
import auth from "../../auth/auth";
import { logoutAsync } from "../../redux/image-collection/image-collection.action";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  navbar: {
    backgroundColor: "white",
    boxShadow: "none",
    color: "#000",
    width: "100%",
    position: "relative"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.spacing(3),
    color:"#bdbdbd",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border:"1px solid rgba(0,0,0,0.25)",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.03)
    },
    height: "30px",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "50vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "25vw",
      height:"55px"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "#bdbdbd"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const PrimarySearchAppBar = (props) => {
  const  {logoutFunc,userDetails} = props;
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logout = async() => {
    await logoutFunc();
    auth.logout(() => {
      props.history.push("/");
    });
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>{userDetails}</p>
      </MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

          <Typography className={classes.title} variant="h6" noWrap>
            Unsplash
          </Typography>
          <div className={classes.search}>
            <Search />
          </div>
          <AddPhoto />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

const mapStatetoProps = state => ({
  userDetails :state.imageCollection.user
})

const mapDispatchToProps =(dispatch) => ({
logoutFunc : () => dispatch(logoutAsync())
})

export default connect(mapStatetoProps,mapDispatchToProps)(PrimarySearchAppBar);
