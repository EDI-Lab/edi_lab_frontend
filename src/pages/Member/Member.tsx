import styles from "./Member.module.less"
import {MemberDisplay} from "./components/MemberDisplay/MemberDisplay.tsx";
import imageCuiMengKe from "../../assets/profile/Image_CuiMengKe.png"
import imageHuZiAng from "../../assets/profile/Image_HuZiAng.png"
import imageWeiJingZhen from "../../assets/profile/Image_WeiJingZhen.png"
import imageJiaBoFang from "../../assets/profile/Image_JiaBoFang.png"
import imageLiZiWen from "../../assets/profile/Image_LiZiWen.png"
import imageSunYiXuan from "../../assets/profile/Image_SunYiXuan.png"
import imageZhangHaoYang from "../../assets/profile/Image_ZhangHaoYang.png"
import imageYangHongYi from "../../assets/profile/Image_YangHongYi.png"
import imageWangYiZhen from "../../assets/profile/Image_WangYiZhen.png"
import iconGithub from "../../assets/icon/MdiGithub.svg"
import iconEmail from "../../assets/icon/MdiEmail.svg"

export function Member() {
    return (<div className={styles.center}>
        <h1 className={styles.main}>团队介绍</h1>
        <h2 className={styles.part}>教师</h2>
        <div className={styles.row}>
            <MemberDisplay imageUrl={""} name={"教师"} description={""}
                           link={""}/>
        </div>
        <h2 className={styles.part}>学生</h2>
        <h3 className={styles.grade}>2021级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={imageWeiJingZhen}
                           name={"魏敬臻"}
                           description={["感兴趣研究内容:数据分析、强化学习", "负责内容:无人机 多智能体协同"]}
                           link={"https://github.com/Jaychenwei"}
                           icons={[iconEmail,iconGithub,]} iconLinks={["mailto:w21411711151118@outlook.com","https://github.com/Jaychenwei"]}/>
            <MemberDisplay imageUrl={imageJiaBoFang}
                           name={"贾博方"}
                           description={["感兴趣研究内容:机器人学习", "负责内容:视觉导航 强化学习"]}
                           link={"https://github.com/BofangJia1227"}
                           icons={[iconEmail,iconGithub,]} iconLinks={["mailto:jiabofang@email.swu.edu.cn","https://github.com/BofangJia1227"]}/>
        </div>


        <h3 className={styles.grade}>2022级</h3>
            <div className={styles.row}>
                <MemberDisplay imageUrl={imageWangYiZhen} name={"王怡臻"} description={[]}
                               link={""}
                               icons={[iconEmail,iconGithub]}
                               iconLinks={["mailto:3131890024@qq.com","https://github.com/dashboard"]}
                />
            </div>
        <h3 className={styles.grade}>2023级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={imageLiZiWen}
                           name={"李梓闻"}
                           description={["感兴趣方向:强化学习","负责内容:智能车开发、仿真环境搭建"]}
                           link={""}
                           icons={[iconEmail,]}
                           iconLinks={["mailto:19823000405@163.com"]}/>
            <MemberDisplay imageUrl={imageYangHongYi}
                           name={"杨弘毅"}
                           description={""}
                           link={""}

            />
        </div>
        <h2 className={styles.part}>合作者</h2>
        <div className={styles.row}>
            <MemberDisplay imageUrl={imageZhangHaoYang}
                           name={"张昊扬"}
                           description={["感兴趣研究内容:前端 后端 编译原理","负责内容:EDI Lab 网页前端"]}
                           link={"https://github.com/aquamarine-z"}
                           icons={[iconEmail,iconGithub,]}
                           iconLinks={["mailto:2418013844@qq.com","https://github.com/aquamarine-z"]}/>
            <MemberDisplay imageUrl={imageCuiMengKe}
                           name={"崔梦柯"}
                           description={["感兴趣研究内容:图像处理 图神经网络GNN"]}
                           link={"https://github.com/cuimengke/"}
                           icons={[iconEmail,iconGithub,]}
                           iconLinks={["mailto:1844755515@qq.com","https://github.com/cuimengke/"]}/>
            <MemberDisplay imageUrl={imageHuZiAng}
                           name={"胡子昂"}
                           description={["感兴趣开发内容:工程开发、硬件、人工智能"]}
                           link={""}
                           icons={[iconEmail,]}
                           iconLinks={["mailto:hza2002@foxmail.com"]}/>
            <MemberDisplay imageUrl={imageSunYiXuan}
                           name={"孙艺轩"}
                           description={["感兴趣研究内容：数字媒体处理、图像处理、AIGC"]}
                           link={""}
                           icons={[iconEmail,]}
                           iconLinks={["mailto:yixuansun124@foxmail.com"]}/>
        </div>
    </div>)
}