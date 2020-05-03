import React, { useState } from 'react'

import {makeStyles} from '@material-ui/core'

import { Editor } from '@tinymce/tinymce-react';

const useStyles = makeStyles(theme =>({
    root:{
        height:'calc(100vh - 56px)',
        width: '100%',
        position:'absolute',
        bottom: 0,
    }
}))


export default function TinyEditor() {
    const classes = useStyles()

    const [content, setContent] = useState("")

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content,editor);
        setContent(content)
    }

    return (
        <div className={classes.root}>
            <Editor
                apiKey="wt9vp5eye73saezfds2zatpk77trtnm7q88bj844080ftrwp"
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={handleEditorChange}
            />
        </div>
    )
}
