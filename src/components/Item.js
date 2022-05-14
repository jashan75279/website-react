import React from 'react'

const Item = (props) => {
    return (
        <>
            <div className="table_responsive">
     
     <table>
       <thead>
         <tr>
           <th>S.N.</th>
           <th>Image</th>
           <th>Name</th>
           <th>Phone</th>
           <th>Address</th>
           <th>Item's</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>01</td>
           <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp" alt="" /></td>
           <td>Jashanpreet singh</td>
           <td>+91 7527938543</td>
           <td>Faridkot</td>
           <td>5-Tricycle</td>
           <td>
             <span className="action_btn">
               {/* <!-- <a href="#">Need</a> --> */}
               <a href="#">Contact Him</a>
             </span>
           </td>
         </tr>
         <tr>
           <td>02</td>
           <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/webp-to-png.png.webp" alt="" /></td>
           <td>Gurbhaj singh </td>
           <td>+91 7520893809</td>
           <td>Canada</td>
           <td>Blankets</td>
           <td>
             <span className="action_btn">
               {/* <!-- <a href="#">Need</a> --> */}
               <a href="#">Contact him</a>
             </span>
           </td>
         </tr>
         <tr>
           <td>03</td>
           <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp" alt="" /></td>
           <td>paras</td>
           <td>+91-7527978782</td>
           <td>Canada</td>
           <td>100-Bottle sanitizer</td>
           <td>
             <span className="action_btn">
               {/* <!-- <a href="#">need</a> --> */}
               <a href="#">contact Him</a>
             </span>
           </td>
         </tr>
       </tbody>
     </table>
   </div>

        </>
    )
}

export default Item
