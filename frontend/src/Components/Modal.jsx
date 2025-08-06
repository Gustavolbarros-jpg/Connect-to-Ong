import React from 'react';

/**
 * Componente Modal reutilizável.
 * @param {boolean} isOpen - Controla se o modal está visível.
 * @param {function} onClose - Função chamada ao clicar no botão "Cancelar" ou fora do modal.
 * @param {function} onContinue - Função chamada ao clicar no botão "Continuar".
 * @param {string} continueText - Texto para o botão de continuar.
 * @param {string} cancelText - Texto para o botão de cancelar.
 * @param {React.ReactNode} children - O conteúdo principal do modal.
 */
function Modal({ isOpen, onClose, onContinue, continueText = "Continuar", cancelText = "Cancelar", children }) {
  // Se isOpen for false, não renderiza nada
  if (!isOpen) {
    return null;
  }

  // A função para fechar o modal também ao clicar no overlay
  const handleOverlayClick = (e) => {
    // Se o clique for no próprio contêiner do overlay, feche o modal
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    // Overlay do modal: cobre a tela inteira, com fundo semi-transparente e centraliza o conteúdo
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Contêiner principal do modal */}
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 p-6">
        
        {/* Conteúdo do modal (o texto central) */}
        <div className="text-center mb-6 ">
          {/* Se children for passado, renderiza-o. Senão, mostra o texto padrão */}
          {children || <p className="text-gray-700">Erro</p>}
        </div>

        {/* Contêiner dos botões: alinhados à direita com espaçamento */}
        <div className="flex justify-center gap-6">
          {/* Botão Cancelar */}
          <button
            onClick={onClose}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-gray-100"
          >
            {cancelText}
          </button>
          {/* Botão Continuar */}
          <button
            onClick={onContinue}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            {continueText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;