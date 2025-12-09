import { useState } from "react";
import "../Style/ChangeAdd.css";

interface ChangeAddProps {
  setAddress: (value: string) => void;
  setIsModelOpen: (value: boolean) => void;
}

const ChangeAdd = ({ setAddress, setIsModelOpen }: ChangeAddProps) => {
  const [newAddress, setNewAddress] = useState("");

  const handleSave = () => {
    if (newAddress.trim() !== "") {
      setAddress(newAddress);
      setIsModelOpen(false);
    }
  };

  return (
    <div className="changeadd-container">
      <input
        type="text"
        placeholder="Enter address"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />

      <div className="changeadd-buttons">
        <button className="cancel-btn" onClick={() => setIsModelOpen(false)}>
          Cancel
        </button>
        <button className="save-btn" onClick={handleSave}>
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAdd;
