import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function Navbar({setUser, user}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <span style={{float: "right"}}>
        {user}
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </span>
    </nav>
  );
}