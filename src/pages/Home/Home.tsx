import styles from "./Home.module.less"

import {Carousel} from "antd";
import carousel1 from "../../assets/image/Carousel_1.png"
import carousel2 from "../../assets/image/Carousel_2.png"
import carousel3 from "../../assets/image/Carousel_3.png"
import carousel4 from "../../assets/image/Carousel_4.png"
import carousel5 from "../../assets/image/Carousel_5.png"
import homepage1 from "../../assets/image/Homepage_1.png"
import homepage2 from "../../assets/image/Homepage_2.png"
import homepage3 from "../../assets/image/Homepage_3.png"

export function Home() {
    const pictures = []
    for (let i = 0; i < 10; i++) {
        pictures.push(<div className={styles.picture}>111</div>)
    }
    return (
        <div className={styles.home}>

            <Carousel autoplay={true} autoplaySpeed={2000} arrows>
                <div className={styles.picture}>

                    <img src={carousel1} alt={""} className={styles.img}></img>
                </div>
                <div className={styles.picture}>
                    <img src={carousel2} alt={""} className={styles.img}></img>
                </div>
                <div className={styles.picture}>
                    <img src={carousel3} alt={""} className={styles.img}></img>
                </div>
                <div className={styles.picture}>
                    <img src={carousel4} alt={""} className={styles.img}></img>
                </div>
                <div className={styles.picture}>
                    <img src={carousel5} alt={""} className={styles.img}></img>
                </div>
            </Carousel>

            {<>
                <div className={styles.introduction}>
                    <img className={styles.image} src={homepage1} alt={""}></img>
                    <div className={styles.column}>
                        <h1>电赛成果</h1>
                        <p></p>
                    </div>
                </div>
                <div className={styles.introduction}>
                    <div className={styles.column}>
                        <h1>仓储项目</h1>
                        <p></p>
                    </div>
                    <img className={styles.image} src={homepage2} alt={""}></img>

                </div>
                <div className={styles.introduction}>
                    <img className={styles.image} src={homepage3} alt={""}></img>
                    <div className={styles.column}>
                        <h1>中科院软件所合作内容</h1>
                        <p></p>
                    </div>
                </div>
            </>}
        </div>
    )
}