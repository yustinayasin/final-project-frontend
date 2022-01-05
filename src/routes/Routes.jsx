import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Home, NotFound} from "pages";
import { LayoutRoot } from "components/layout/layout-root";
import { LayoutAdmin } from "components/layout/layout-admin";
import User from "./User";
import AdminTable from "../components/admin-table/AdminTable";
import { AddVaccine } from "../pages/admin/add-vaccine/AddVaccine";
import { AddSession } from "../pages/admin/add-session/AddSession";
import { AddUser } from "../pages/admin/add-user/AddUser";


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LayoutRoot>
            <Home />
          </LayoutRoot>
        </Route>
        <Route path="/user" component={User} />
        <Route exact path="/admin/vaccine">
          <LayoutAdmin>
            <AdminTable />
          </LayoutAdmin>
        </Route>
        <Route exact path="/admin/session">
          <LayoutAdmin>
            <AdminTable />
          </LayoutAdmin>
        </Route>
        <Route exact path="/admin/user">
          <LayoutAdmin>
            <AdminTable />
          </LayoutAdmin>
        </Route>
        <Route exact path="/admin/vaccine/add">
          <LayoutAdmin>
            <AddVaccine />
          </LayoutAdmin>
        </Route>
        <Route exact path="/admin/session/add">
          <LayoutAdmin>
            <AddSession />
          </LayoutAdmin>
        </Route>
        <Route exact path="/admin/user/add">
          <LayoutAdmin>
            <AddUser />
          </LayoutAdmin>
        </Route>
        <Route exact path="/*">
          <LayoutRoot>
            <NotFound />
          </LayoutRoot>
        </Route>
      </Switch>
    </Router>
  );
}
