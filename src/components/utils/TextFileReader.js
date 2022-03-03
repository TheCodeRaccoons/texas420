import React from "react";
import {marked} from 'marked'
import {client } from '../../client';
import '../utils/WYSIWYG/WYSIWYG.scss'

class TextFileReader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            markdown_processed: "initText",
		};
	}

	componentDidMount() {
        this.fetchData();
	}

    fetchData = () => {
        const query = '*[_type == "rules"]'
        client.fetch(query)
        .then((data) => { 
            this.setupEditor(data[0].rules, data)
            console.log(data)
        })
    }

    translateFromSanity = (rules) => {
        let fullText = ""
        rules.forEach(element => {
            fullText += element.children[0].text + "\n"
        }); 
        return fullText
    }

    setupEditor(markdown) {
        let sanityImp = this.translateFromSanity(markdown)
        let md = marked(sanityImp)  
        this.setState({markdown_processed: md})
    }


	render() {
		return (
			<div className="rules-data"> 			
				<div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.markdown_processed}}></div>
			</div>
		);
	}
}

export default TextFileReader;