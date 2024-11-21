// RecordModal.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

import {
  Modal,
  Button,
  ModalContent,
} from "@nextui-org/react";

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

const RecordModal: React.FC<RecordModalProps> = ({
  isOpen,
  onClose,
}) => {

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

              <div className="bg-default-100 shadow-md mx-auto p-4 rounded-lg max-w-md">
                <p className="mb-4 text-gray-400 text-sm">
                  🔴 Recording
                  {/*⏸️ Paused */}
                </p>
                <div className="flex justify-center items-center">Microphone Component</div>
              </div>
              <Button
                onClick={() => alert("action")}
                className="bg-black mt-3 w-full text-white"
              >
                TRANSCRIBE
              </Button>
              <Button
                onClick={() => alert("action")}
                className="bg-white w-full text-black"
              >
                ⏸️ Pause Recording
                {/* ▶️ Resume Recording */}
              </Button>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RecordModal;
