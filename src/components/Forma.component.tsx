import '../styles/formaton.styles.css'
const Forma = (props: any) => {
    return (
        <div className="forma">
            <div className="forma_img">
                <img src={props.img} alt="illustration de la l'element en question" />
            </div>
            <div className="forma_txt">
                <h4>
                    {props.title}
                </h4>


            </div>
            <div className="forma_txt_btn">
                <button>en savoir plus</button>
            </div>

        </div>
    )
}

export default Forma