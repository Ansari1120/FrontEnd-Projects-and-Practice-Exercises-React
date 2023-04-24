import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Route, Routes, useNavigate } from "react-router-dom";
import Message from "../screens/dashboardScreens/message";
import Notification from "../screens/dashboardScreens/notify";
import Feedback from "../screens/dashboardScreens/feed";
import Comments from "../screens/dashboardScreens/comments";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FeedbackIcon from "@mui/icons-material/Feedback";
import NotesIcon from "@mui/icons-material/Notes";
import About from "../screens/dashboardScreens/about";
import Posts from "../screens/dashboardScreens/post";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoIcon from "@mui/icons-material/Info";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { userSignOut } from "../config/firebasemethods";
import MySnackBarMessage from "./ShowMessage";
import Todos from "../screens/dashboardScreens/todos";
import Quiz from "../screens/StudentScreens/Quiz";
import QandA from "../screens/StudentScreens/QandA";
import QandAresponse from "../screens/StudentScreens/QandAresponse";
import StudentDetails from "../screens/StudentScreens/StudentDetails";
import YourStats from "../screens/StudentScreens/YourStats";
import More_Available_Courses from "../screens/StudentScreens/More_Available_Courses";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const { window, UserName, switching } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [res, setRes] = React.useState();
  const [condition, setCondition] = React.useState("");
  const [msgopen, setmsgOpen] = React.useState(false);
  const [menuList, setMenuList] = React.useState([
    {
      name: "Messages",
      route: "message",
      ico: <MessageIcon />,
    },
    {
      name: "Notification",
      route: "notify",
      ico: <NotificationsNoneIcon />,
    },
    {
      name: "Feedback",
      route: "feed",
      ico: <FeedbackIcon />,
    },
    {
      name: "Comments",
      route: "comments",
      ico: <NotesIcon />,
    },
    {
      name: "About",
      route: "about",
      ico: <InfoIcon />,
    },
    {
      name: "Posts",
      route: "post",
      ico: <PostAddIcon />,
    },
    {
      name: "Todos",
      route: "todos",
      ico: <PostAddIcon />,
    },
    {
      name: "Quiz",
      route: "quiz",
      ico: <PostAddIcon />,
    },
    {
      name: "Ask Questions",
      route: "QandA",
      ico: <PostAddIcon />,
    },
    {
      name: "Intiute Query Responses",
      route: "QandAresponse",
      ico: <PostAddIcon />,
    },
    {
      name: "Student Details",
      route: "StudentDetails",
      ico: <PostAddIcon />,
    },
    {
      name: "Your Program Stats",
      route: "YourStats",
      ico: <PostAddIcon />,
    },
    {
      name: "More Available Courses",
      route: "More_Available_Courses",
      ico: <PostAddIcon />,
    },
  ]);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setmsgOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigation = useNavigate();

  let moveScreen = (route) => {
    navigation(route);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Toolbar />
      <Divider />
      <List>
        {menuList.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => moveScreen(x.route)}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {x.ico}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <ListItem disablePadding>
        <ListItemButton
          disabled={switching}
          onClick={() =>
            userSignOut()
              .then(() => {
                navigation("/");
                msgopen(true);
                setRes("Logged Out Successfully !");
                setCondition("success");
              })
              .catch((err) => {
                console.log(err);
                msgopen(true);
                setRes(err);
                setCondition("error");
              })
          }
        >
          <ListItemIcon>{<ExitToAppIcon />} </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItemButton>
      </ListItem>
    </div>
  );
  return (
    <Box alignItems="center" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Student Dashboard
          </Typography>
          <Typography item md={6} sx={{ ml: 120, ...(open && { ml: 100 }) }}>
            Welcome ! {UserName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          container={container}
          // open={mobileOpen}
          onClose={handleDrawerOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="message" element={<Message />} />
          <Route path="notify" element={<Notification />} />
          <Route path="feed" element={<Feedback />} />
          <Route path="comments" element={<Comments />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="todos" element={<Todos />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="QandA" element={<QandA />} />
          <Route path="QandAresponse" element={<QandAresponse />} />
          <Route path="StudentDetails" element={<StudentDetails />} />
          <Route path="YourStats" element={<YourStats />} />
          <Route path="More_Available_Courses" element={<More_Available_Courses />} />
        </Routes>
        <MySnackBarMessage
          variant="outlined"
          open={msgopen}
          severity={condition}
          onClose={handleClose}
          label={res}
        />
      </Box>
    </Box>
  );
}
