import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="text-red-500 text-xl font-bold">
      Tailwind OK
    </div>
  );
}

function Login() {
  return <h1 className="text-3xl text-blue-600">Đăng nhập</h1>;
}

export default function App() {
  return (
    <div className="p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
