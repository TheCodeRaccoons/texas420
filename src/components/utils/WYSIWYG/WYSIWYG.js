import React from 'react';
import './WYSIWYG.scss' 
import {marked} from 'marked'
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";

import { urlFor, client } from '../../../client';

class Wysiwyg extends React.Component {   
    constructor(props) {
        super();
    
        this.state = {
            markdown_txt: "initText",
            markdown_processed: "initText",
            is_editor_shown: true
        }
    } 

    componentDidMount() { 
        this.props.HighlightNav("sideNav visible-nav")
        //TODO set the markdow from the API
        this.fetchData();
    }

    fetchData = () => {
        const query = '*[_type == "rules"]'
        client.fetch(query)
        .then((data) => {
            console.log(data[0]) 
            this.setupEditor(data[0].rules)
        })
    }

    translateFromSanity(rules) {
        let fullText = ""
        rules.forEach(element => {
            fullText += element.children[0].text + "\n"
        });
        console.log(fullText)
        return fullText
    }


    setupEditor(markdown) {
        let sanityImp = this.translateFromSanity(markdown)
        let md = marked(sanityImp)  
        this.setState({
            markdown_txt: sanityImp,
            markdown_processed: md
                    })
    }

    onEditorChange = (newMarkdown) => {  
        let md = marked(newMarkdown)  
        this.setState({
            markdown_txt: newMarkdown,
            markdown_processed: md
        })
    }

    render() {
        return(
            <div className="editor-container">   
                <div className="left-col">
                    <div className="editor" id="editor">
                        <AceEditor
                            value={this.state.markdown_txt}
                            mode="markdown"
                            theme="monokai"
                            onChange={this.onEditorChange}
                            name="editor-ace"
                            showGutter={false}
                            showPrintMargin={false}
                            wrapEnabled={true}
                            editorProps={{ $blockScrolling: true }}
                        /> 
                    </div>
                </div>
                <div className="right-col">
                    <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.markdown_processed}}></div>
                </div> 
        </div>
        ) 
    }
}

export default Wysiwyg