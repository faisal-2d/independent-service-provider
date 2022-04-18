import React from 'react';

const Blog = () => {
    return (
        <div className="container my-5">
            <article>
                <h3>What is difference between authorization and authentication?</h3>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Authorization</th>
      <th scope="col">Authentication</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Authentication verifies the user.</td>
      <td>Authorization decides to access user in protected routes.</td>
    </tr>
    <tr>
      <td>Authentication is visible to users.</td>
      <td>Authorization is not visible to users.</td>
    </tr>
    <tr>
      <td>Authentication works through passwords, OPTs, fingerprints, and other information provided by the user.</td>
      <td>Authorization works through settings that are implemented and maintained by the developer.</td>
    </tr> 
    <tr>
      <td>Authentication can be Partially changed by users.</td>
      <td>Authorization can be not changed by users.</td>
    </tr>  
  </tbody>
</table>

            </article>
            <article>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
            </article>
        </div>
    );
};

export default Blog;