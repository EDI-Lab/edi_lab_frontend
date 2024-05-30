import styles from "./MenuDisplay.module.less"
export function MemberDisplay(
    props:{
        imageUrl:string,
        name:string,
        description:string,
        link:string,
    }
){
    return(
        <div className={styles.column}>
            <img src={props.imageUrl} alt={""} />
            <h1 onClick={()=>{
                window.open(props.link)
            }}>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}