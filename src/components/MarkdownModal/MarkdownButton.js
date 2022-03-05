import React from 'react'
import md_icon from '../../media/Icons/markdown-icon.png'
import './MarkdownModal.scss'

const MarkdownButton = () => {

    return(
        <React.Fragment> 
            <div className='md-button'>
                <img src={md_icon} alt='md-icon' />
                <span class="tooltiptext">Display editor's Markdown</span>
            </div>
        </React.Fragment>
    )
}

export default MarkdownButton;