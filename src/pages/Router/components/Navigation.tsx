import styles from "./Navigation.module.less"
import React, {useEffect} from "react";
import {homepageRef, joinUsRef, memberRef, researchRef} from "../WebsiteRouter.tsx";
import iconList from "../../../assets/icon/List.png"
import iconCloseList from "../../../assets/icon/ChevronUp.png"
export function Navigation(){
    const [expandMenu,setExpandMenu]=React.useState(false)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    //const [expanding, setExpanding] = React.useState(false)
    const expandMenuRef = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
    const handleExpand = () => {
        /*
        if (expanding) return

        setExpanding(true)
        const expandSpeed = 0.5 //展开速度为0.5%每ms
        const startTime = Date.now()
        const handleClose = () => {
            const currentTime = Date.now()
            const progress = 100 - (currentTime - startTime) * expandSpeed
            //console.log(progress)
            setExpandMenu(false)
            if (progress <= 0) {
                expandMenuRef.current.style.transform = `translateY(${0})`
                setExpanding(false)
            } else {
                expandMenuRef.current.style.transform = `translateY(${progress / 100})`
                requestAnimationFrame(handleClose)
            }
        }
        const handleOpen = () => {
            const currentTime = Date.now()
            const progress = (currentTime - startTime) * expandSpeed
            expandMenuRef.current.style.display = "auto"
            setExpandMenu(true)
            if (progress >= 100) {
                setExpanding(false)

                expandMenuRef.current.style.transform = `translateY(${100})`
            } else {
                expandMenuRef.current.style.transform = `translateY(${progress / 100})`
                requestAnimationFrame(handleOpen)
            }
        }*/
        //如果该菜单已被打开 则应该将它关闭
        setExpandMenu(!expandMenu)
    }
    const mobileWidth = 900
    let isMobile = windowWidth < mobileWidth
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        isMobile = windowWidth < mobileWidth
    }
    useEffect(() => {

        window.addEventListener("resize", handleResize)
        homepageRef.current?.click()
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    useEffect(() => {
        if (windowWidth > mobileWidth) {
            setExpandMenu(false)
        }
    }, [windowWidth]);
    return(
        <>
            {!isMobile &&
                <div className={styles.navigation}>
                    <h1 className={styles.title}>EDI Lab</h1>
                    <ul className={styles.menu}>
                        <li className={styles.button} onClick={() => {
                            homepageRef.current?.click()
                        }}>首页
                        </li>
                        <li className={styles.button} onClick={() => {
                            memberRef.current?.click()
                        }}>成员
                        </li>
                        <li className={styles.button} onClick={() => {
                            researchRef.current?.click()
                        }}>研究
                        </li>
                        <li className={styles.button} onClick={() => {
                            joinUsRef.current?.click()
                        }}>加入我们
                        </li>

                    </ul>
                </div>
            }
            {isMobile &&
                <>
                    <div className={styles.navigation_mobile}>
                        <img src={expandMenu ? iconCloseList : iconList} alt={""} className={styles.expand_menu}
                             onClick={() => {
                                 handleExpand()
                             }}/>
                        <h1>EDI Lab</h1>
                        <div className= { expandMenu? styles.expand_menu_content:styles.expand_menu_content_closed} ref={expandMenuRef}>
                            <ul>
                                <li className={styles.button} onClick={() => {
                                    homepageRef.current?.click()
                                    setExpandMenu(false)
                                }}>首页
                                </li>
                                <div className={styles.split}></div>
                                <li className={styles.button} onClick={() => {
                                    memberRef.current?.click()
                                    setExpandMenu(false)
                                }}>成员
                                </li>
                                <div className={styles.split}></div>
                                <li className={styles.button} onClick={() => {
                                    researchRef.current?.click()
                                    setExpandMenu(false)
                                }}>研究
                                </li>
                                <div className={styles.split}></div>
                                <li className={styles.button} onClick={() => {
                                    joinUsRef.current?.click()
                                    setExpandMenu(false)
                                }}>加入我们
                                </li>
                                <div className={styles.split_line}></div>
                            </ul>
                        </div>

                    </div>

                </>


            }

        </>

    )
}