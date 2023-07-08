import '../styles/hitem.styles.css'
const HItemi=(props:any)=>{
    return(
        <div className={props.position}>
              <div className="hitem_img">
                <img src={props.img} alt="illustration de la l'element en question"/>
            </div>
            <div className="hitem_txt">
                <h4>
                {props.title}
                </h4>
                <p>{props.desc}</p>

            </div>
            
        </div>
    )
}

export default HItemi