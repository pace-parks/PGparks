import React, {useState, useEffect, useMemo} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Event.css';
import Spinner from './Spinner';

const Event = ()=>{
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
const [searchTerm, setSearchTerm] = useState('');
const postsPerPage = 18;
const navigate = useNavigate();

useEffect(()=>{
   const url = `https://pgparks.com/wp-json/wp/v2/events?per_page=51`
   const getPosts = async ()=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    } catch(err){
        console.log(`Error fetching Data`, err)
        setLoading(false);
    } 
}
   getPosts();
}, [])

const handleClick = (eventSlug)=>{
    navigate(`/events/${eventSlug.slug}`, {state: eventSlug});
}
// Get the current posts to be displayed on current page
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
//Without search
//const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// With search & use useMemo for filtering & pagination performance
const currentPosts = useMemo(()=>{
    return posts
    .filter((event)=> event.slug.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstPost, indexOfLastPost);
}, [posts, searchTerm, currentPage])

//handle  page change
const paginate = (pageNum)=> setCurrentPage(pageNum);
//calculate the total page
const totalPage = Math.ceil(posts.length/postsPerPage);

    return (
       
        <div className='container-fluid'>
        {
            loading ? (
                <Spinner />
            ): (
                <>
                {/* Row with Heading and Search Input on the Same Line */}
        <div className="row d-flex justify-content-between align-items-center">
          {/* Heading */}
          <h3 className="col-8" style={{ marginBottom: '0' }}>LISTS OF EVENTS</h3>

          {/* Search Field on the right */}
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by event name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        
            <div className='row'>
            {
            currentPosts.map(event=>(
                <div key={event.id} className='col-lg-2 col-md-4 col-sm-6 mb-4 d-flex justify-content-center'>
                <div className='card' 
                style={{cursor: 'pointer', height: '100%' }}
                onClick={()=>handleClick(event)} >
                <div className='card-img-wrapper'>
                < img
                src={event.featured_img} alt={event.slug} className="card-img-top"  />
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{event.slug} </h5>
                </div>
            </div>
        </div>
            ))
        }
        </div>
        {/* pagination controls  */}
        {
            totalPage > 1 && (
                <div className='pagination'>
                    <button
                    onClick={()=> paginate(currentPage -1)}
                    disabled={currentPage === 1}
                    >                 
                    Prev
                        </button> 
            {[...Array(totalPage)].map((_, index)=>(
                <button
                key={index}
                onClick={()=> paginate(index + 1)}
                className={currentPage === index +1 ? 'active' : ''}
                >
                { index + 1}
                </button>
            ))}
            <button
            onClick={()=> paginate(currentPage + 1)}
            disabled={currentPage ===totalPage}
            >
                Next
            </button>
                     </div>
            )}      
        </>
            )}
            </div>
        
    )
}

export default Event;