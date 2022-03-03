import React from "react";
import parse from 'html-react-parser'; 
import {marked} from 'marked'
import {client } from '../../client';
import '../utils/WYSIWYG/WYSIWYG.scss'

//const LinksRegex = "\\[(.*?)\\]\\((.*?)\\)";
const TitlesRegex = /##(.*$)/gm;
const BoldsRegex = /__(.*$)/gm;
const BulletsRegex = /-\s(.*$)/gm;
const lineBreakRegex = /\n(.*$)/gm;
const TableRegex = /(.*)\|(.*)/gm;

class TextFileReader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
            markdown_processed: "initText",
		};
	}

	componentDidMount() {
		//this.readTextFile(this.props.txt);
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

    setupEditor(markdown, data) {
        let sanityImp = this.translateFromSanity(markdown)
        let md = marked(sanityImp)  
        this.setState({
            markdown_txt: sanityImp,
            markdown_processed: md,
            rule_obj: data
        })
    }


	getPost = (text) => { 
		var titles = [...text.matchAll(TitlesRegex)];  
		var breaks = [...text.matchAll(lineBreakRegex)];
		var bullets = [...text.matchAll(BulletsRegex)];
		var bolds 	= [...text.matchAll(BoldsRegex)]
		var tables = [...text.matchAll(TableRegex)] 
  
		//Titles
		for(var t = 0; t < titles.length; t++) { 
			var titleItem = [...titles[t]]; 
			text = text.replace(titleItem[0] ,'<div class="title">' + titleItem[1] +'</div>');
		}
		//breaks
		for(var br = 0; br < breaks.length; br++){
			var linebreak = [...breaks[br]];
			text = text.replace(linebreak[0], '<br />' + linebreak[1]);
		}
		//bullets
		for(var bu = 0; bu < bullets.length; bu++){
			var bullet = [...bullets[bu]];
			text = text.replace(bullet[0], '<li>' + bullet[1] + '</li>');
		}
		//bolds
		for(var b = 0; b < bolds.length; b++){
			var bold = [...bolds[b]];
			text = text.replace(bold[0], '<div class="important">' + bold[1] + '</div>');
		}
		//Table 
			for(var tb = 0; tb < tables.length; tb++){
				let Tdata = "<table><tbody><tr>";
				var table = [...tables[tb]];
				table.forEach((td, i ) => {
					if(i !== 0) 
					Tdata += '<td>' + td + '</td>'
				}); 
				text = text.replace(table[0], '' + Tdata + '</tr></tbody></table>');
				
			} 
			//console.log(table)
		return parse(text);
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					let allText = rawFile.responseText; 
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div className="rules-data"> 
			<div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.markdown_processed}}></div>
				{this.getPost(this.state.text)}
			</div>
		);
	}
}

export default TextFileReader;