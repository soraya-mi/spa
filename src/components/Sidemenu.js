import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Contact from "./Contact/contact";
import Profile from "./Profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  text: {
    color: "#6E6E6E",
    paddingTop: 15,
  },
  active: {
    color: "rgb(165, 120, 238)",
  },
}));
const Sidemenu = () => {
  const classes = useStyles();
  const items = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
      component: "Home page",
      exact: true,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <AccountCircleIcon />,
      component: <Profile />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <ContactPhoneIcon />,
      component: <Contact />,
    },
    {
      path: "*",
      component: "404 not found",
    },
  ];
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "200px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}>
          <List>
            {items.map((item) => (
              <NavLink
                key={item.name}
                exact={item.exact || false}
                to={item.path}
                className={classes.link}
                activeClassName={classes.active}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Drawer>
        <Switch>
          {items.map((item) => (
            <Route exact path={item.path}>
              <Container>
                <Typography variant="h3" gutterBottom className={classes.text}>
                  {item.name}
                </Typography>
                <hr />
                {item.component}
              </Container>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};
export default Sidemenu;
// function useLocation() {
//   const Props = React.useContext(__RouterContext);
//   return Props.location;
// }
