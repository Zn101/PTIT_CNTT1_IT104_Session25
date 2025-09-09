import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function ListUser() {
  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
  ];

  return (
    <div className="d-flex gap-3 p-4">
      {users.map((user) => (
        <div key={user.id} className="border p-3" style={{ width: "250px" }}>
          <p><strong>Id:</strong> {user.id}</p>
          <p><strong>UserName:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          
          <Link to={`/user/${user.id}`} className="btn btn-outline-secondary w-100">
            Xem chi tiết
          </Link>
        </div>
      ))}
    </div>
  );
}
