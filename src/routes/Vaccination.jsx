import PrivateRoute from "./PrivateRoute";
import { LayoutRoot } from "components/layout/layout-root";
import { NotFound } from "pages";
import { VaccinationHomepage, PlaceListing } from "pages/vaccination";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function Vaccination() {
  const { path } = useRouteMatch();

  return (
    <LayoutRoot>
      <Switch>
        <Route exact path={path} component={VaccinationHomepage} />
        <Route path={`${path}/:sessionId`} component={PlaceListing} />
        <Route path="*" component={NotFound} />
      </Switch>
    </LayoutRoot>
  );
}
