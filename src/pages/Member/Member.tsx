import styles from "./Member.module.less"
import {MemberDisplay} from "./components/MemberDisplay/MemberDisplay.tsx";
import imageCuiMengKe from "../../assets/profile/Image_CuiMengKe.png"
import imageHuZiAng from "../../assets/profile/Image_HuZiAng.png"
import imageWeiJingZhen from "../../assets/profile/Image_WeiJingZhen.png"
import imageJiaBoFang from "../../assets/profile/Image_JiaBoFang.png"
import imageLiZiWen from "../../assets/profile/Image_LiZiWen.png"
import imageSunYiXuan from "../../assets/profile/Image_SunYiXuan.png"
import imageZhangHaoYang from "../../assets/profile/Image_ZhangHaoYang.png"
import iconGithub from "../../assets/icon/Github.png"
import iconEmail from "../../assets/icon/Email.png"
export function Member() {
    return (<div className={styles.center}>
        <h1 className={styles.main}>团队介绍</h1>
        <h2 className={styles.part}>教师</h2>
        <div className={styles.row}>
            <MemberDisplay imageUrl={""} name={"教师1"} description={"这是介绍"}
                           link={""}/>
        </div>
        <h2 className={styles.part}>学生</h2>
        <h3 className={styles.grade}>2021级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={imageWeiJingZhen} name={"魏敬臻"} description={["邮箱:w21411711151118@outlook.com","github:https://github.com/Jaychenwei"]}
                           link={"https://github.com/Jaychenwei"} icons={[iconEmail,iconGithub,]} iconLinks={["mailto:w21411711151118@outlook.com","https://github.com/Jaychenwei"]}/>
            <MemberDisplay imageUrl={imageJiaBoFang} name={"贾博方"} description={["邮箱: jiabofang@email.swu.edu.cn","github:https://github.com/BofangJia1227"]}
                           link={"https://github.com/BofangJia1227"} icons={[iconEmail,iconGithub,]} iconLinks={["mailto:jiabofang@email.swu.edu.cn","https://github.com/BofangJia1227"]}/>
        </div>

        { //暂无2022级的成员 所以使用false控制此板块不显示
            false&&<>
            <h3 className={styles.grade}>2022级</h3>
            <div className={styles.row}>
                <MemberDisplay imageUrl={""} name={"学生1"} description={"这是介绍"}
                               link={"点击名字跳转的链接"}/>
                <MemberDisplay imageUrl={""} name={"学生2"} description={"这是介绍"}
                               link={"点击名字跳转的链接"}/>
            </div>
            </>
        }

        <h3 className={styles.grade}>2023级</h3>
        <div className={styles.row}>
            <MemberDisplay imageUrl={imageLiZiWen} name={"李梓闻"} description={["邮箱:19823000405@163.com"]}
                           link={""} icons={[iconEmail,]} iconLinks={["mailto:19823000405@163.com"]}/>
            <MemberDisplay imageUrl={""} name={"杨弘毅"} description={""}
                           link={""}/>
        </div>
        <h2 className={styles.part}>合作者</h2>
        <div className={styles.row}>
            <MemberDisplay imageUrl={imageZhangHaoYang}
                           name={"张昊扬"}
                           description={["邮箱:2418013844@qq.com","github:https://github.com/aquamarine-z","感兴趣研究内容:前端 后端 编译原理","负责内容:EDI Lab 网页前端"]}
                           link={"https://github.com/aquamarine-z"}
                           icons={[iconEmail,iconGithub,]}
                           iconLinks={["mailto:2418013844@qq.com","https://github.com/aquamarine-z"]}/>
            <MemberDisplay imageUrl={imageCuiMengKe}
                           name={"崔梦柯"}
                           description={["邮箱:1844755515@qq.com","github:https://github.com/cuimengke/"]}
                           link={"https://github.com/cuimengke/"}
                           icons={[iconEmail,iconGithub,]}
                           iconLinks={["mailto:1844755515@qq.com","https://github.com/cuimengke/"]}/>
            <MemberDisplay imageUrl={imageHuZiAng}
                           name={"胡子昂"}
                           description={["邮箱:hza2002@foxmail.com"]}
                           link={""}
                           icons={[iconEmail,]}
                           iconLinks={["mailto:hza2002@foxmail.com"]}/>
            <MemberDisplay imageUrl={imageSunYiXuan}
                           name={"孙艺轩"}
                           description={["邮箱:yixuansun124@foxmail.com","感兴趣研究内容：数字媒体处理、图像处理、AIGC"]}
                           link={""}
                           icons={[iconEmail,]}
                           iconLinks={["mailto:yixuansun124@foxmail.com"]}/>
        </div>
    </div>)
}