import Forma from "../components/Forma.component"
import { FORMA } from "../const/formation"
import "../styles/formaton.styles.css"
const Formation=()=>{
    return(
        <div className="uni formation">
            {
                FORMA.map((i:any)=>
                <Forma title={i.title} position={i.position} desc={i.desc} img={i.img}/>
                )
            }
        </div>
    )
}

export default Formation