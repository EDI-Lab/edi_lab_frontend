import styles from "./MenuDisplay.module.less"
MemberDisplay.defaultProps={
    imageUrl:"",
    name:"",
    description:"",
    link:"",
    icons:[],
    iconLinks:[],
}
export function MemberDisplay(
    props:{
        imageUrl:string,
        name:string,
        description:string|string[],
        link:string,
        icons:string[],
        iconLinks:string[],
    }
){
    let description
    if(!Array.isArray(props.description)) {
        description = <p>{props.description}</p>
        //console.log(Array.isArray(props.description))
    } else {
        description=[]
        for(let i=0;i<props.description.length;i++){
            description.push(<p key={i}>{props.description[i]}</p>)
        }
    }
    const icons=[]
    for(let i=0;i<props.icons.length;i++){
        let link
        if(props.iconLinks[i].length>i) link=props.iconLinks[i]
        else link=null
        icons.push(
            <img key={i} src={props.icons[i]} alt={"图像加载失败"} onClick={()=>{
                if(link!=null){
                    window.open(link)
                }
            }}/>
        )
    }
    return(
        <div className={styles.column}>
            <img src={props.imageUrl} alt={""} />
            <h1 onClick={()=>{
                if(props.link==="") return
                window.open(props.link)
            }}>{props.name}</h1>
            {description}
            <div className={styles.icon}>
                {icons}
            </div>

        </div>
    )
}