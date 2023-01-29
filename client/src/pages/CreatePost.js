import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useAuthContext } from '../hooks/useAuthContext'

export default function CreatePost() {
    const [title, setTitle] = useState(null)
    const [publish, setPublish] = useState(null)
    const [img, setImg] = useState(null)
    const { user } = useAuthContext()

    const editorRef = useRef(null);
    const log = async () => {
        if (editorRef.current) {
            const myObj = { text: editorRef.current.getContent(), isPublished: publish, img, title }
            console.log(editorRef.current.getContent());
            const response = await fetch("/api/admin/dashboard/create-post", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(myObj)
            })

            if (response.ok) {
                console.log("ok")
            }
        }
    };


    return (
        <div className="editor-wrapper">

            <Editor
                apiKey='jy5240yig30yyplfmeq7hpbarx4o8h6p23xy17ycfsn283px'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}></input>
            <label htmlFor="Published">Publish: </label>
            <input type="checkbox" name="isPublished" id="Publish" onChange={(e) => setPublish(e.target.checked)} />
            <label htmlFor="img">Image source: </label>
            <input type="text" name="img" id="img" onChange={(e) => setImg(e.target.value)}></input>
            <button onClick={log}>Create Post</button>
        </div>
    );
}