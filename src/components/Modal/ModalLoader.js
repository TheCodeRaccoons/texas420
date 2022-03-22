import './ModalLoader.scss'

const ModalLoader = (props) => {

    return(
        <div className='modal-loader-container'>
            <div className='modal-body'>
                <h2>Updating...</h2>
                <div className="lds-hourglass"></div>
                {(props.updateError) ? <button className='btn-continue' onClick={props.resetModal}>Continue</button> : ""}
            </div>
        </div>
    )
}

export default ModalLoader;