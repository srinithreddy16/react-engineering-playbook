import axios from 'axios';
import { useState } from 'react';

export default function CommentList_Http() {
  const [comments,setComments] = useState<any[]>([]);

  const fetchCommentsData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setComments(response.data);
  }

  return <>
    <h3 className="text-center">Comemnt List Using Http</h3>

    <button onClick={fetchCommentsData}>fetch Data</button>

    <table className="table table-bordered">
        <tbody>
            {comments.map(comment=>{
                return <tr key={comment.id}>
                    <td>{comment.id}</td>
                    <td>{comment.postId}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                </tr>
            })}
        </tbody>
    </table>
  </>
} 