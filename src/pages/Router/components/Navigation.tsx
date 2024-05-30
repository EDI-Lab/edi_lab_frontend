import styles from "./Navigation.module.less"
import React from "react";
import {homepageRef, joinUsRef, memberRef, researchRef} from "../WebsiteRouter.tsx";
export function Navigation(){
    const [expandMenu,setExpandMenu]=React.useState(false)
    return(
        <>

            <div className={styles.navigation}>
                <button className={styles.expand_menu} onClick={()=>{
                    setExpandMenu(!expandMenu)
                }}>+</button>
                <h1 className={styles.title}>EDI Lab</h1>
                <ul className={styles.menu}>
                    <li className={styles.button} onClick={()=>{
                        homepageRef.current?.click()
                    }}>首页</li>
                    <li className={styles.button} onClick={()=>{
                        memberRef.current?.click()
                    }}>成员</li>
                    <li className={styles.button} onClick={()=>{
                        researchRef.current?.click()
                    }}>研究</li>
                    <li className={styles.button} onClick={()=>{
                        joinUsRef.current?.click()
                    }}>加入我们</li>
                </ul>


            </div>
            {expandMenu&& <ul className={styles.expand_menu}>
                <li className={styles.button} onClick={()=>{
                    homepageRef.current?.click()
                }}>首页</li>
                <li className={styles.button} onClick={()=>{
                    memberRef.current?.click()
                }}>成员</li>
                <li className={styles.button} onClick={()=>{
                    researchRef.current?.click()
                }}>研究</li>
                <li className={styles.button} onClick={()=>{
                    joinUsRef.current?.click()
                }}>加入我们</li>
            </ul>}
        </>

    )
}