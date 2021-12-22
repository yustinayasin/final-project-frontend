import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Login, SignUp, UserDashboard } from "pages/user";
import { NotFound } from "pages";
import { LayoutRoot } from "components/layout/layout-root";

export default function Admin() {
  const { path } = useRouteMatch();

  return (
    <LayoutRoot>
      <Switch>
        <Route exact path={path} component={UserDashboard} />
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/signup`}>
          <SignUp />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </LayoutRoot>
  );
}