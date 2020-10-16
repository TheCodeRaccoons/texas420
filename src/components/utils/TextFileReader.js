import React from "react";
import ReactHtmlParser from 'react-html-parser'; 

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
			text: ""
		};
	}

	componentDidMount() {
		this.readTextFile(this.props.txt);
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
		return ReactHtmlParser (text);
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
				{this.getPost(this.state.text)}
			</div>
		);
	}
}

export default TextFileReader;