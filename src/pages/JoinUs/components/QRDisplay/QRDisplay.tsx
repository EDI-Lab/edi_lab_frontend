import styles from "./QRDisplay.module.less"
QRDisplay.defaultProps={
    qrImageUrl:"",
    title:"",
    description:[]
}
export function QRDisplay(
    props:{
        qrImageUrl:string,
        title:string,
        description:string[],

    }
){
    const descriptionParagraphs=props.description.map((paragraph,index)=>{
        return(
            <p  className={styles.description} key={index}>{paragraph}</p>
        )
    })
    return(
        <div className={styles.content}>
            <h1 className={styles.title}>{props.title}</h1>
            <img src={props.qrImageUrl} alt={"图片加载失败"}/>
            {descriptionParagraphs}
        </div>
    )
}