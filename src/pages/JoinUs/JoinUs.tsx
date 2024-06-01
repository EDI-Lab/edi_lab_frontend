import styles from "./JoinUs.module.less"
import qrQQ from "../../assets/image/QR_QQ.jpg"
import qrFeiShu from "../../assets/image/QR_FeiShu.jpg"
import {QRDisplay} from "./components/QRDisplay/QRDisplay.tsx";
export function JoinUs() {
    return(
        <div className={styles.page}>
            <div className={styles.center}>
                <h1 className={styles.title}>加入我们</h1>
                <div className={styles.row}>
                    <QRDisplay title={"QQ群"}
                               description={["群号:779202920"]}
                               qrImageUrl={qrQQ}
                    ></QRDisplay>
                    <QRDisplay title={"飞书"}
                               description={[]}
                               qrImageUrl={qrFeiShu}
                    ></QRDisplay>
                </div>
            </div>

        </div>

    )
}