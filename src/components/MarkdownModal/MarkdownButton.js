import React from 'react'
import md_icon from '../../media/Icons/markdown-icon.png'
import './MarkdownModal.scss'

const MarkdownButton = (props) => {

    return(
        <React.Fragment> 
            <div className='md-button' onClick={ () => props.onToggleModal(true) }>
                <img src={md_icon} alt='md-icon' />
                <span className="tooltiptext">Display editor's Markdown</span>
            </div>
        </React.Fragment>
    )
}

export default MarkdownButton;