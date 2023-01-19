import React , {useState, useRef} from 'react';
import {  useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';



const Comments = ({post}) => {

    const[comments,setComments] = useState([1,2,3,4]);
    const [comment,setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const commentsRef = useRef();
    const dispatch = useDispatch();
    

    const handleClick = async (e) => {
        e.preventDefault();
        const finalComment = `${user.result.name}: ${comment}`;
        dispatch(commentPost(finalComment,post._id));
        setComments([...comments,finalComment]);
        setComment('');
        commentsRef.current.scrollIntoView({behavior:'smooth'});

      
    }

    return (
        <>
            <div className="commentsOuterContainer">
                <div className="commentsInnerContainer">
                    <h4>Comments</h4>
                    <div ref={commentsRef} className="commentsList">
                        {comments.map((c,i) => (
                            <div key={i}>
                                <p>{i}</p>
                            </div>
                        ))}
                    </div>
                    {user?.result?.name && ( 
                        <div>
                        <form className="form">
                            <input className="input" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                            <button className="button" onClick={handleClick}> Add </button>
                        </form>
                    </div>
                    )  }
                    
                </div>
            </div>
        </>
    )

}
export default Comments