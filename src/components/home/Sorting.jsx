import { useNavigate } from "react-router-dom";

export default function Sorting({ setSort }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        backgroundColor: "bisque",
        height: "3rem",
        marginTop: "50px",
        alignItems: "center",
        paddingRight: "2rem",
        paddingLeft: "2rem",
        justifyContent: "space-between",
      }}
    >
      <div
        onClick={() => {
          navigate(0);
        }}
        style={{ cursor: "pointer" }}
      >
        All Products
      </div>
      <select
        onChange={(e) => setSort(e.target.value)}
        name=""
        id=""
        style={{ padding: "0.25rem", cursor: "pointer" }}
      >
        <option disabled value="">
          Seciniz
        </option>
        <option value="inc">Artan fiyata göre sırala</option>
        <option value="dec">Azalan fiyata göre sırala</option>
      </select>
    </div>
  );
}
