const MarkdownModal = (props) => {
    return(
        <div className="modal-container">
            <div className="modal-body"> 
                <span onClick={ () => props.onToggleModal(false) }>[Close]</span>
                <h1>Markdown</h1>
                <h3> Titles </h3>
                <p> # The largest heading<br/>
                    ## The second largest heading<br/>
                    ###### The smallest heading<br/>
                </p>
                <h3>Styling text</h3>
                <p>
                    <strong>Bold: </strong>	** [Your text] **<br/>
                    <strong>Italic: </strong>	* [Your text] *<br/>
                    <strong>Strikethrough: </strong>	~~ [Your text] ~~<br/>
                    <strong>All bold and italic: </strong>	*** [Your text] *** <br/>
                </p>
                <h3>Quoting text</h3>
                <p>
                    In order to add a coment like or quote like text use the following:<br />
                    "> Text that is a quote"
                </p>
                <h3>Links</h3>
                <p>
                    You can create an inline link by wrapping link text in brackets [ ], 
                    and then wrapping the URL in parentheses ( ). 

                    This site was built using [GitHub Pages](https://pages.github.com/).
                </p>
                <h3>Images</h3>
                You can display an image by adding ! and wrapping the alt text in [ ]. 
                Then wrap the link for the image in parentheses ().
                ex:<br />
                ![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

                <h3>Lists</h3>
                <p> You can make an unordered list by preceding one or more lines of text with - or *.
                    To order your list, precede each line with a number.
                </p>
                <h3>Nested Lists</h3>
                <p>You can create a nested list by indenting one or more list items below another item.
                    To create a nested list using the editor you can align your list visually. 
                    Type space characters in front of your nested list item, 
                    until the list marker character (- or *) lies directly below the first 
                    character of the text in the item above it.
                </p>
                <h3>Task lists</h3>
                <p>
                    To create a task list, preface list items with a hyphen and space followed by [ ]. To mark a task as complete, use [x].
                </p>
            </div>
        </div>
    )
}

export default MarkdownModal;