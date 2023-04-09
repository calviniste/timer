import HItemi from "../components/HItemi.component"
import { NSERVICE } from "../const/service"
import '../styles/home.styles.css'
const Service=()=>{
    return(
        <div className="uni">
            {
                    NSERVICE.map((hi:any)=>
                    <HItemi title={hi.title} img={hi.img} desc={hi.desc} position={hi.position}/>
                    )
                }
        </div>
    )
}
export default Service