// RecordModal.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import MicrophoneButton from "../button/microphone";
import RippleLoader from '../effect/ripple';
import { Modal, Button, ModalContent } from "@nextui-org/react";

interface RecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Border {
  border:
    | "success"
    | "default"
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | undefined;
}

const RecordModal: React.FC<RecordModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const RecordingState = ({ isLoading } : { isLoading  : boolean }) => {
    const backgroundClass = isLoading
      ? "bg-default-900 shadow-md mx-auto p-4 rounded-lg max-w-md"
      : "bg-default-100 shadow-md mx-auto p-4 rounded-lg max-w-md";
    const microphoneClass = isLoading
      ? "text-[hsl(150.06,79.34%,64.09%,0.61)] hover:text-[hsl(33.75deg 79.34% 64.09% / 61%)] active:text-text-[hsl(150.06,79.34%,64.09%,0.61)]"
      : "text-blue-200 hover:text-blue-500 active:text-blue-700";
    const microphoneText = isLoading ? "🔴 Recording" : "⏸️ Paused";

    return (
      <div className={backgroundClass}>
        <p className="mb-4 text-gray-400 text-sm transition-color z-1">{microphoneText}</p>
        <div className="flex justify-center items-center">
          {isLoading&&<RippleLoader className="absolute z-0" />}
          <MicrophoneButton className={microphoneClass} onClick={() => setIsLoading(!isLoading)}>
            <FontAwesomeIcon size="10x" icon={faMicrophoneLines} />
          </MicrophoneButton>
        </div>
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <div className="p-6">
              <div className="flex flex-row items-center gap-2 justify-center">
                <FontAwesomeIcon size="2x" icon={faMicrophoneLines} />
                <p className="text-[25px] font-bold">Record</p>
              </div>
              <RecordingState isLoading={isLoading} />
              <Button
                onClick={() => alert("action")}
                className="bg-black mt-3 w-full text-white"
              >
                TRANSCRIBE
              </Button>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RecordModal;
