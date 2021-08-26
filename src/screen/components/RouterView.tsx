import { Route, Switch, useRouteMatch } from "react-router-dom";
// routers 扁平化
const flatRoutes = (routers: any[]) => {
  const routerArr: any[] = [];
  routers.forEach((routerIt) => {
    if (routerIt.children && routerIt.children.length) {
      routerArr.push.apply(routerArr, flatRoutes(routerIt.children));
    } else {
      routerArr.push(routerIt);
    }
  });
  return routerArr;
};
const RouterView = ({ routes }: any) => {
  const match = useRouteMatch();
  const BASE_URL = match.url === "/" ? "" : match.url;
  console.log(routes, "routes");
  return (
    <Switch>
      {flatRoutes(routes).map((item: any) => (
        <Route
          path={BASE_URL + item.path}
          key={item.path}
          exact={item.path === "/"}
          component={item.component}
        />
      ))}
    </Switch>
  );
};
export default RouterView;
