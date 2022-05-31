import "./ShowPost.css";
function ShowPost (props) {
   return (
     <>
       <table class="table">
         <tr>
           <th>STT</th>
           <th>Title</th>
           <th>Image</th>
           <th>Status</th>
         </tr>
         {(props.ListProduct).map((product, index) => (
           <tr>
             <td>{index + 1}</td>
             <td>{product.title_post}</td>
             <td>
               <img src={product.image_post} className = "img_table"></img>
             </td>
             <td>{product.status}</td>
             <td>
               <button
                onClick={() => {
                  props.updateInput(product);
                }}
               >
                 Edit
               </button>
             </td>
             <td>
               <button
                onClick={() => {
                  props.deleteProduct(product);
                }}
               >
                 Delete
               </button>
             </td>
           </tr>
         ))}
       </table>
     </>
   );
}   
export default ShowPost;