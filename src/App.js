 
import './App.css';
import { useGetAllPostQuery,useGetPostByIdQuery ,useDeletePostMutation,useCreatePostMutation} from './services/post';

function App() {
  //const responseInfos = useGetAllPostQuery();
  const responseInfo = useGetPostByIdQuery(11);
  const [createdPost,response] = useDeletePostMutation(2);
  //console.log("res",res);
  const created = useCreatePostMutation();
  console.log("CREATED",response.isSuccess)
  //console.log("Response Info: ",responseInfo)
  if(responseInfo.isLoading) return <div>Loading...</div>
  if(responseInfo.isError) return <div>An Error occured{responseInfo.error.error}</div>
  return (

    //GET ALL POSTS
    // <div>
    //   <h1>Hello world</h1>
    //   {responseInfo.data.map((post,i) => {
    //     return <h1 key={i}>{post.body}</h1>
    //   })}
    // </div>

    //GET SINGLE DATA
    <div>
           <h1>{responseInfo.data.title}</h1>
    </div>
  );
}

export default App;
