import React from 'react';
import './WYSIWYG.scss' 
import {marked} from 'marked'
import AceEditor from 'react-ace'
import Login from '../../Login/Login'
import MarkdownButton from '../../MarkdownModal/MarkdownButton';
import MarkdownModal from '../../MarkdownModal/MarkdownModal';
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";

import { client } from '../../../client';

class Wysiwyg extends React.Component {   
    constructor(props) {
        super();
    
        this.state = {
            markdown_txt: "initText",
            markdown_processed: "initText",
            is_editor_shown: true,
            rule_obj: "",
            is_logged_in: false,
            loggedAs: "",
            modalToggle: false
        }
    } 

    componentDidMount() { 
        this.props.HighlightNav("sideNav visible-nav") 
        this.fetchData();
        this.props.HideNav(true);
    }

    onLogin = () => {
        this.setState({
            is_logged_in: true
        })
    }
    
    onToggleModal = (toggle) => {
        this.setState({ 
            modalToggle: toggle
        })
    }

    fetchData = () => {
        const query = '*[_type == "rules"]'
        client.fetch(query)
        .then((data) => { 
            this.setupEditor(data[0].rules, data)
            console.log(data)
        })
    }

    translateToSanity = () => { 
        const textBlocks = this.state.markdown_txt.split("\n") 
        this.onUpdateRules(textBlocks)
    }

    translateFromSanity = (rules) => {
        let fullText = ""
        rules.forEach(element => {
            fullText += element.children[0].text + "\n"
        }); 
        return fullText
    }

    setupEditor(markdown, data) {
        let sanityImp = this.translateFromSanity(markdown)
        let md = marked(sanityImp)  
        this.setState({
            markdown_txt: sanityImp,
            markdown_processed: md,
            rule_obj: data
        })
    }

    onEditorChange = (newMarkdown) => {  
        let md = marked(newMarkdown)  
        this.setState({
            markdown_txt: newMarkdown,
            markdown_processed: md,
            toggle_login: true
        })
    } 

    onUpdateRules = (_mutations) => {   
        const modMutations = _mutations.map((val, i) => {
            return({children:[{marks:[], text: val, _type: 'span',_key: (i+1)}], markDefs: [], style:"normal", _type: "block", _key: (Math.random() + 1).toString(36).substring(7) })
        }) 
        const mutations = {
            mutations: [
            {
                patch: {
                id: "826e0fea-c20c-45bb-92f0-b3c07368d0f9",
                set: {
                    rules: modMutations,
                },
                },
            },
            ],
        };
        fetch(`https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v${process.env.REACT_APP_SANITY_VERSION}/data/mutate/${process.env.REACT_APP_SANITY_DATASET}`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_SANITY_TOKEN}`
            },
            body: JSON.stringify(mutations)
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }

    render() {
        return(
            <React.Fragment>
                <MarkdownButton  onToggleModal={this.onToggleModal} />
                {(!this.state.is_logged_in) ? <Login onLogin={this.onLogin} /> : (
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
                    <button className='button-publish' onClick={this.translateToSanity}>submit</button>
                    {this.state.modalToggle ? <MarkdownModal onToggleModal={this.onToggleModal} /> : ""}
                </div>

                )}
                
        </React.Fragment>
        ) 
    }
}

export default Wysiwyg