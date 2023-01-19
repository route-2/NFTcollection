import React , {useState,useEffect, useRef} from 'react';
import {  useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';



const Comments = ({post}) => {

    const[comments,setComments] = useState([]);
    const [comment,setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const commentsRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        setComments(post?.comments);
    },[post])
    
      console.log(post)
    const handleClick = async () => {
        
        const finalComment = `${user.result.name}: ${comment}`;
        console.log(post)
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
                        
                        {comments?.map((c,i) => (
                            <>

                           
                            <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]} <br/> 
              </>
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