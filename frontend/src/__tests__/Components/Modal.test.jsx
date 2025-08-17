import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../../Components/Modal";

describe("Modal Component", () => {
  test("renders modal when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  test("does not render modal when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal content</div>
      </Modal>
    );

    const closeButton = screen.getByText("Cancelar");
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("renders modal with continue button", () => {
    render(
      <Modal isOpen={true} onClose={() => {}} onContinue={() => {}}>
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByText("Continuar")).toBeInTheDocument();
  });
});
