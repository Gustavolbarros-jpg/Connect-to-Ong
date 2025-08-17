import React from "react";

function OngDetailModal({ ong, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={ong.logo}
            alt={`Logo da ${ong.name}`}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 flex-shrink-0"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-900">{ong.name}</h2>
            <p className="text-lg text-gray-600 mt-1">
              {ong.area} | {ong.location}
            </p>
          </div>
        </div>
        <div className="mt-6 border-t pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Sobre a ONG
          </h4>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
            {ong.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OngDetailModal;
