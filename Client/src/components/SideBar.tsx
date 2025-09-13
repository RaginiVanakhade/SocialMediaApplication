import { Link , useNavigate} from "react-router-dom";
import { useSignInAccount } from "../lib/appwrite/react-query/reactqueryandmutationas";
import { useEffect } from "react";
import { useUserContext } from "../context/AuthContext";

const SideBar = () => {
  const {mutate : signOUt, isSuccess} = useSignInAccount()
  const navigate = useNavigate()
  const { user } = useUserContext()
  // const handleLogOut = () => {

  // }

  useEffect(() => {
    if(isSuccess) navigate(0)
  }, [isSuccess])
  return <nav>side
    <div>
      <Link to="/">
      <img src="" alt="" /></Link>

      <Link to={`/profile/${user.id}`}>
      <img src={user.imageUrl || 'profile'} alt="" />
      <div>
        <p>{user.name}</p>
        <p>@${user.username}</p>
      </div>
      </Link>

      <ul></ul>
    </div>
  </nav>;
};

export default SideBar;
