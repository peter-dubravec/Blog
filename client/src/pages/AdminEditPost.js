import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useAuthContext } from '../hooks/useAuthContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const [article, setArticle] = useState({ title: "", text: "", img: "", isPublished: null })

    const { user } = useAuthContext()
    const { id } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`https://peter-dubravec.website/api/admin/dashboard/${id}/without-comments`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setArticle({ title: json.title, text: json.text, img: json.img, isPublished: article.isPublished })
            }
        }
        fetchArticle()
    }, [user, id])

    const editorRef = useRef(null);
    const log = async () => {
        if (editorRef.current) {
            const response = await fetch(`https://peter-dubravec.website/api/admin/dashboard/${id}/update`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: article.title, text: editorRef.current.getContent(), img: article.img })
            })
            const json = await response.json()

            if (response.ok) {
                navigate(`/admin/dashboard/${id}`)
            }
        }
    };


    return (
        <div className="editor-wrapper">
            <div className="content-container editor">
                <Editor
                    apiKey='jy5240yig30yyplfmeq7hpbarx4o8h6p23xy17ycfsn283px'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={article && article.text}
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
                <div className="editor-inputs-container">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={(e) => {
                        setArticle({ ...article, title: e.target.value })
                    }} value={article?.title}></input>


                    <label htmlFor="img">Image source: </label>
                    <input type="text" name="img" id="img" onChange={(e) => setArticle({ ...article, img: e.target.value })} value={article?.img ? article.img : ""}></input>

                    <button onClick={log}>Update Post</button>
                </div>
            </div>
        </div>
    );
}