import UsersJson from "./../../hooks/Json/Users.json";
import { UsersTemplate } from "../../components/templates/UsersTemplate/UsersTemplate";

export const Users:React.FC = () => {

  // TODO::コンパイルを通すため一時的にany
  // 解消方法はfetch の型がany になってしまうのでその修正
  // const users = useUsers();
  // const [users, setUsers] = useState<User[]>([]);
  
  // useEffect(() => {
  //     fetch('http://localhost:7001/api/v1/users',{
  //         method: 'GET'
  //     })
  //     .then(res => res.json())
  //     .then((data) => {
  //       setUsers(data.users)
  //     },
  //     (error) => {
  //         console.log(error);
  //         const errData = {
  //         }
  //     })
  // }, [])

  const users = UsersJson.users;

  return (
    <>
      <UsersTemplate users={users} />
    </>
  );
};