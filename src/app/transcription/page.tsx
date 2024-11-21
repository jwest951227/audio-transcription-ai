"use client";

import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import CustomButton from "@/components/button/custombutton";
import { Button } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature, faMicrophone, faCloudUpload } from "@fortawesome/free-solid-svg-icons";

import RecordModal from "@/components/modal/recordmodal";

import "swiper/css";
import "swiper/css/navigation";

const BlogListPage = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    setIsLoading(false);
  }, []);
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Layout>
        {domLoaded && (
          <div className="flex flex-row py-12 container justify-between gap-5">
            <div className="flex flex-col container gap-1 p-3 border border-gray-300 rounded shadow-lg">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center p-2">
                  <FontAwesomeIcon icon={faFileSignature} />
                  <p className="font-bold text-[25px]">RecentFiles</p>
                </div>
                <Button
                  className="bg-white text-black"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faMicrophone} />
                  <p>RECORD</p>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="flex justify-center">Welcome to TurboScribe!</p>
                <CustomButton
                  className="border rounded-xl"
                  onClick={() => alert("Transcribing..")}
                >
                  <FontAwesomeIcon icon={faCloudUpload} />
                  Transcribe Your First File
                </CustomButton>
              </div>
            </div>
          </div>
        )}
      <RecordModal isOpen={isModalOpen} onClose={closeModal} />
      </Layout>
    </>
  );
};

export default BlogListPage;
