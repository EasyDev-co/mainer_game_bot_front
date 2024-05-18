import { ReactNode } from "react";
import "./Popup.css";

export const Popup = ({ onClose, children }: { onClose: () => void; children: ReactNode; }) => {
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__button-closed" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};
