import React from "react";
import Button from "./Button";

const Modal = ({ isOpen, onClose, onContinue, continueText, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
        {children}
        <div className="mt-6 flex justify-end gap-4">
          <Button onClick={onClose} secondary>
            Cancelar
          </Button>
          <Button onClick={onContinue} primary>
            {continueText || "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
