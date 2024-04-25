import { ReactNode } from "react";
import "./Popup.css";

export const Popup = ({ children, onClose }: { children: ReactNode; onClose: () => void }) => {
  return (
    <div className="popup">
      <div className="popup__container">
      <button className="popup__button-closed" onClick={onClose} />
        {children}
        </div>
    </div>
  );
};
