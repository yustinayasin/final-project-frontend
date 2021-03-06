import PrivateRoute from "./PrivateRoute";
import { LayoutRoot } from "components/layout/layout-root";
import { NotFound } from "pages";
import { Login, SignUp, UserDashboard, News } from "pages/user";
import {
  AddFamilyMember,
  FamilyMembers,
  UserProfile,
  EditFamilyMember,
  VaccinationSession,
} from "pages/user/dashboard-pages";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function User() {
  const { path } = useRouteMatch();

  return (
    <LayoutRoot>
      <Switch>
        <PrivateRoute exact path={path} component={UserDashboard} />
        <PrivateRoute path={`${path}/profile`} component={UserProfile} />
        <PrivateRoute
          path={`${path}/family-member/add`}
          component={AddFamilyMember}
          exact
        />
        <PrivateRoute
          path={`${path}/family-member/edit`}
          component={EditFamilyMember}
          exact
        />
        <PrivateRoute
          path={`${path}/family-member`}
          component={FamilyMembers}
        />
        <PrivateRoute
          path={`${path}/vaccine-session`}
          component={VaccinationSession}
        />
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/signup`}>
          <SignUp />
        </Route>
        <Route path={`${path}/news`}>
          <News />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </LayoutRoot>
  );
}
