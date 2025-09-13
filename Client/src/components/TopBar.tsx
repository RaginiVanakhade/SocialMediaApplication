import { Link , useNavigate} from "react-router-dom";
import { useSignInAccount } from "../lib/appwrite/react-query/reactqueryandmutationas";
import { useEffect } from "react";
import { useUserContext } from "../context/AuthContext";

const TopBar = () => {
  const {mutate : signOUt, isSuccess} = useSignInAccount()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const handleLogOut = () => {

  }

  useEffect(() => {
    if(isSuccess) navigate(0)
  }, [isSuccess])
  return <section  style={{ backgroundColor: "lightblue" }}>top
    <div>
      <Link to="/">
      <img src="" alt="logo" /> </Link>

      <div>
        <button onClick={handleLogOut}>
          <img src="" alt="logout" />
        </button>
        <Link to={`/profile/${user.id}`}>
        <img src={user.imageUrl || 'profile'} alt="" /></Link>
      </div>
    </div>
  </section>;
};

export default TopBar;
