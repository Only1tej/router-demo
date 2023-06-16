import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  // or destructure user Id
  // const {userId} = useParams()
  return <h1>Details of User {userId}</h1>;
};
