function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data));
}
    
   function displayComment(datas){
    const commentContainer = document.getElementById('comments-container');
    for( const data of datas){
      const div = document.createElement('div');
      div.classList.add('data');
      div.innerHTML = `
        <h4>name:${data.name} </h4>
        <h4>email:${data.email} </h4>
        <h4>comments des: ${data.body}</h4>
      `;
      commentContainer.appendChild(div);
     }
    }

loadComment();