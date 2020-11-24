import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div classNameName={styles.root}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div classNameName={styles.topHeader}>
      <div className="home__container-fluid">
            <div className="home__headerButtons">
                <a className={styles.headerBtn } href="#"></a>
                <a className={styles.headerBtn }  href="#"></a>
                <a className={styles.headerBtn }  href="#"></a>
            </div>
        </div>
      </div>
      <div classNameName={styles.mainHeader}>
        <div classNameName="home__container-fluid">
            <a classNameName={styles.brandLogo} href="#">Mimbbo</a>
            <a classNameName={styles.user}href="#"><i classNameName="far fa-user"></i></a>
        </div>
      </div>
      <section classNameName={styles.heroSection}>
          <div classNameName="container-fluid">
            <div classNameName="row">
              <div classNameName="col-md-4 mx-auto">
                <div classNameName={`${styles.searchArea} mt-4`}>
                    <input className={styles.searchInput} type="text" name="" id="" placeholder="What's next?"/>
                    <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            <h1 classNameName={`${styles.mainHeading} mt-5`}>Most Viewed</h1>
            <div classNameName="row">
                <div classNameName={styles.boxesParent}>
                    <div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                    </div>
                    <div classNameName={`${styles.bigBoxes} my-3 my-md-0`}>
                        <div classNameName={styles.bigBox}></div>
                    </div>
                    <div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                    </div>
                    <div classNameName={`${styles.bigBoxes} my-3 my-md-0`}>
                        <div classNameName={styles.box ,styles.bigBox}></div>
                    </div>
                  </div>
            </div>
            <h1 classNameName={`${styles.mainHeading} mt-2`}>Most Faved</h1>
            <div classNameName="row mt-4">
                <div classNameName={styles.boxesParent}>
                    <div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                    </div>
                    <div classNameName={`${styles.bigBoxes} my-3 my-md-0`}>
                        <div classNameName={styles.bigBox}></div>
                    </div>
                    <div>
                        <div classNameName={styles.smallBoxes}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                        <div classNameName={`${styles.smallBox} border`}>
                            <div classNameName={styles.box}></div>
                            <div classNameName={styles.box}></div>
                        </div>
                    </div>
                    <div classNameName={`${styles.bigBoxes} my-3 my-md-0`}>
                        <div classNameName={styles.bigBox}></div>
                    </div>
                </div>
            </div>
            <a classNameName={`recently ${styles.mainHeading}`} href="#" data-toggle="modal" data-target="#exampleModalCenter">
                Recently Booked
            </a>
          </div>
      </section>
      <div  classNameName={`modal fade ${styles.myModal}`} id="exampleModalCenter" 
        tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div classNameName="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div classNameName="modal-content">
                    <div classNameName="modal-body">
                        <div classNameName="row">
                          <div classNameName="col-md-8">
                              <div classNameName={styles.booking}>
                                  <button classNameName={`btn btn-outline-success ${styles.bookButton}`} data-dismiss="modal">Book
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
                    </div>
              </div>
           </div>
      </div>
    </div>
  )
}
