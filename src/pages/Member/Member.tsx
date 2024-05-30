import styles from "./Member.module.less"
import {MemberDisplay} from "./components/MemberDisplay/MemberDisplay.tsx";

export function Member() {
    return (<div className={styles.center}>
        <h1 className={styles.main}>团队</h1>
        <h2 className={styles.part}>教师</h2>
        <MemberDisplay imageUrl={""} name={"教师1"} description={"这是介绍"}
                       link={"点击名字跳转的链接"}/>
        <h2 className={styles.part}>学生</h2>
        <h3 className={styles.grade}>2021级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={""} name={"学生1"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
            <MemberDisplay imageUrl={""} name={"学生2"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
        </div>
        <h3 className={styles.grade}>2022级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={""} name={"学生1"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
            <MemberDisplay imageUrl={""} name={"学生2"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
        </div>
        <h3 className={styles.grade}>2023级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={""} name={"学生1"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
            <MemberDisplay imageUrl={""} name={"学生2"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
        </div>
        <h2 className={styles.part}>合作者</h2>
        <div className={styles.row}>
            <MemberDisplay imageUrl={""} name={"合作者1"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
            <MemberDisplay imageUrl={""} name={"合作者2"} description={"这是介绍"}
                           link={"点击名字跳转的链接"}/>
        </div>
    </div>)
}