import { useSelector } from "react-redux";


const Profile = () => {
 const user=useSelector(state=>state.value)   
    return ( 
        <div>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>
    </div>
     );
}
 
export default Profile;