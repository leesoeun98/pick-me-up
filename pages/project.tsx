import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../src/components/organisms/ModalView";
import UpdateModal from "../src/components/organisms/ModalUpdate";
import Gnb from "../src/components/organisms/Gnb";
import ProjectBody from "../src/components/templates/ProjectBody";
import Footer from "../src/components/organisms/Footer";

export default function Project() {
  const router = useRouter();
  const [update, setUpdate] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);
  const [modalReload, setModalReload] = useState<number>(0);

  return (
    <>
      {router.query.pid && !update && (
        <Modal
          modalType="project"
          isVisible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/project`)}
          setUpdate={setUpdate}
          reload={reload}
          setReload={setReload}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></Modal>
      )}
      {router.query.pid && update && (
        <UpdateModal
          modalType="project"
          pid={router.query.pid}
          onClose={() => {
            setUpdate(false);
            router.push(`/project`);
          }}
          setUpdate={setUpdate}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></UpdateModal>
      )}
      <Gnb></Gnb>
      <ProjectBody
        viewVisible={!!router.query.pid}
        reload={reload}
        setReload={setReload}
      ></ProjectBody>
      <Footer></Footer>
    </>
  );
}
