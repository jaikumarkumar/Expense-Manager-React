import { useContext } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../context/Authcontext";

import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../constants/constants";

export function MultiLevelSidebar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {user ? user : "No Name"}
        </Typography>
      </div>
      <List>
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
            <ListItemSuffix></ListItemSuffix>
          </ListItem>
        </Link>
        <Link to={`/${ROUTES.PROFILE}`}>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
        <Link to={`/${ROUTES.EXPENSES}`}>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Expenses
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <button onClick={logout}>Logout</button>
        </ListItem>
      </List>
      <Outlet />
    </Card>
  );
}
