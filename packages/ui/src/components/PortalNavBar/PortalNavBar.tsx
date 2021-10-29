import NavigationBar from '../SharedComponents/NavigationBar/NavigationBar'
import { routesPosts, routesAdmin } from './Routes'

export const PortalNavBar = () => {
  return <NavigationBar routes={routesPosts} adminRoutes={routesAdmin}></NavigationBar>
}
