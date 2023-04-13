import React, { useContext} from "react";


import { AuthContext } from '../../context/auth';
import LoggedInUser from "./LoggedInUser";
import NonLoggedInUser from "./NonLoggedInUser";

function Home() {

	const { user, isUserLoaded } = useContext(AuthContext);

	return isUserLoaded ? <LoggedInUser user={user} /> : <NonLoggedInUser />
}

export default Home;