import country_list from "./data/list";
import "./css/selectBox.css";

const selectBoxArray = ["English", "Deutsch", "Francais"];
export default function CustomSelect() {
  return (
    <div style={{ display: "flex", gap: "0.2rem", marginTop: "0.5rem" }}>
      <div className="language">
        <div style={{ left: "85%" }} className="arrow"></div>
        <select>
          {selectBoxArray.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </select>
      </div>
      <div className="location">
        <div style={{ left: "92%" }} className="arrow"></div>
        <select>
          {country_list.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
