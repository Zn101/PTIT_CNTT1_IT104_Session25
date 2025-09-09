import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2 className="text-center mt-4">User not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h4 className="card-title mb-3">Chi tiết User</h4>
        <p><strong>Id:</strong> {user.id}</p>
        <p><strong>UserName:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}
