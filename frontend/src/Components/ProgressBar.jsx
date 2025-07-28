import React from "react";

const steps = [
  { title: "Detalhes do Projeto" },
  { title: "Selecione a ONG" },
  { title: "Revisão e Envio" },
];

function ProgressBar({ currentStep, totalSteps }) {
  const stepsToRender = steps.slice(0, totalSteps || steps.length);

  return (
    <section className="relative w-full p-8 my-8">
      <div className="absolute top-1/2 left-0 w-full h-[5px] bg-blue-600 -translate-y-1/2"></div>

      <div className="relative flex justify-center items-center gap-x-96">
        {stepsToRender.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="relative">
              <div
                className={`
                  w-[28px] h-[28px] rounded-full z-10 border-4 flex items-center justify-center transition-all
                  ${
                    isCompleted
                      ? "bg-blue-600 border-blue-600 text-white"
                      : isActive
                      ? "bg-[#00FFFB] border-blue-600"
                      : "bg-white border-blue-600"
                  }
                `}
              >
                {isCompleted && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </div>

              <p className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-gray-600">
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProgressBar;
