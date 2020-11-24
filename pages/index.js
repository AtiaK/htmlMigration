import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useState} from "react"
import {Modal} from "react-bootstrap"
export default function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topHeader}>
        <div className="home__container-fluid">
          <div className="home__headerButtons">
            <a className={styles.headerBtn} href="#"></a>
            <a className={styles.headerBtn} href="#"></a>
            <a className={styles.headerBtn} href="#"></a>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className="home__container-fluid">
          <a className={styles.brandLogo} href="#">
            Mimbbo
          </a>
          <a className={styles.user} href="#">
            <i className="far fa-user"></i>
          </a>
        </div>
      </div>
      <section className={styles.heroSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className={`${styles.searchArea} mt-4`}>
                <input
                  className={styles.searchInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="What's next?"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
          <h1 className={`${styles.mainHeading} mt-5`}>Most Viewed</h1>
          <div className="row">
            <div className={styles.boxesParent}>
              <div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <div className={`${styles.box} ${styles.bigBox}`}></div>
              </div>
              <div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <div className={`${styles.box} ${styles.bigBox}`}></div>
              </div>
            </div>
          </div>
          <h1 className={`${styles.mainHeading} mt-2`}>Most Faved</h1>
          <div className="row mt-4">
            <div className={styles.boxesParent}>
              <div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <div className={`${styles.box} ${styles.bigBox}`}></div>
              </div>
              <div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
                <div className={styles.smallBoxes}>
                  <div className={styles.box}></div>
                  <div className={styles.box}></div>
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <div className={`${styles.box} ${styles.bigBox}`}></div>
              </div>
            </div>
          </div>
          <a
            className={`recently ${styles.mainHeading}`}
            href="#"
            onClick={handleShow}
          >
            Recently Booked
          </a>
        </div>
      </section>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className={`${styles.myModal}`}
              >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <div className="row">
                          <div className="col-md-8">
                              <div className={styles.booking}>
                                  <button className={`btn btn-outline-success ${styles.bookButton}`} data-dismiss="modal">Book
                                      Now</button>
                              </div>
                          </div>
                          <div className="col-md-4 mt-4 mt-md-0">
                            <div className={styles.noteBox}>
                                <div className={styles.note}>
                                    <span className={styles.modalText}>Style:</span>
                                    <span className={styles.modalText}>Bantu Knots</span>
                                    <br/>
                                    <span className={styles.modalText}>Stylist:</span>
                                    <span className={styles.modalText}>@camile</span>
                                    <br/>
                                    <span className={`${styles.modalText} mb-0`}>Time</span>
                                    <span className={`${styles.modalText} mb-0`}>2h</span>
                                </div>
                            </div>
                          </div>
                        </div>
                </Modal.Body>
                
              </Modal>

              {/* <div className="row">
                          <div className="col-md-8">
                              <div className={styles.booking}>
                                  <button className={`btn btn-outline-success ${styles.bookButton}`} data-dismiss="modal">Book
                                      Now</button>
                              </div>
                          </div>
                          <div className="col-md-4 mt-4 mt-md-0">
                            <div className={styles.noteBox}>
                                <div className={styles.note}>
                                    <span className={styles.modalText}>Style:</span>
                                    <span className={styles.modalText}>Bantu Knots</span>
                                    <br/>
                                    <span className={styles.modalText}>Stylist:</span>
                                    <span className={styles.modalText}>@camile</span>
                                    <br/>
                                    <span className={`${styles.modalText} mb-0`}>Time</span>
                                    <span className={`${styles.modalText} mb-0`}>2h</span>
                                </div>
                            </div>
                          </div>
                        </div> */}
            </div>
  );
}
