function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos => displayPhotos(photos));

}
function displayPhotos(photos){
    const photoContainer = document.getElementById('photos-container');
    for(const photo of photos){
    const photoDiv = document.createElement('photo-div');
    photoDiv.classList.add('photo');
    photoDiv.innerHTML = `
     <h4>albumId-${photo.albumId}</h4>
     <h4>thumbnailUrl-${photo.thumbnailUrl}</h4>
     <h4>title-${photo.title}</h4>
     <h4>url-${photo.url}</h4>
    `;
   photoContainer.appendChild(photoDiv);
 }
}
loadPhotos();