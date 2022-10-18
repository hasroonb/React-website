import React ,{useState} from "react";
import axios from "axios";
// import NewsAPI from "newsapi";

 const Blog = () => {
  // 20220808150431
// https://newsapi.org/v2/everything?q=apple&from=2022-08-07&to=2022-08-07&sortBy=popularity&apiKey=210bebb16e744a57b9067e2e6d6de557
 
 const [news , setnews]=useState([])
const fetchNews=()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=210bebb16e744a57b9067e2e6d6de557`)
  .then((res)=>{
  console.log(res);
   setnews(res.data.articles)
  })
}
  

 fetchNews();
    return (
   <>


    <div className="card text-center">
 
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <h2>Blogs...</h2>
  </div>
</div>

 <div className="row row-cols-1 row-cols-md-5 g-4">
  {news.map((art)=>(
      <div className="col">
      <div className="card" style={{width: "18rem;"}}>
            <img src={art.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 class="card-title">{art.title?art.title.slice(0,45):""}...</h5>
              <p className="card-text">{art.description?art.description.slice(0,100):""}...</p>
              <a href={art.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
        ))}
   </div>
    
    </>
    );

  };
  
  export default Blog;