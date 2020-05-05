import React, { useState, useEffect } from 'react'

import {makeStyles} from '@material-ui/core'

import { Editor } from '@tinymce/tinymce-react';

const useStyles = makeStyles(theme =>({
    root:{
        width: '100%',
    }
}))


export default function TinyEditor({type,handleQuesState,ques_submitted,question}) {
    const classes = useStyles()

    // const [content, setContent] = useState("")

    // const [input,setInput] = useState({[type]:""})

    const handleEditorChange = (content, editor) => {
        // console.log('Content was updated:', content,editor);
        // setContent(content)
        // setInput({[type]:content})
        handleQuesState({[type]:content})
    }

    return (
        <div className={classes.root}>
            <Editor
                apiKey="wt9vp5eye73saezfds2zatpk77trtnm7q88bj844080ftrwp"
                init={{
                    height: 200,
                    placeholder:`Enter ${type} here ......`,
                    menubar: false,
                    plugins: [
                        'advlist autolink  charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help '
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
                }}
                onEditorChange={handleEditorChange}
                value={question[type]}
            />
        </div>
    )
}
