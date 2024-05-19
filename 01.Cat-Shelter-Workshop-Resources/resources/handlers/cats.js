function createCat(catObj) {
    return `
                <li>
                    <img src=${catObj.image} alt="Black Cat">
                    <h3>${catObj.name}</h3>
                    <p><span>Breed: </span>${catObj.breed}</p>
                    <p><span>Description: </span>${catObj.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
    `;
}

module.exports = {
    createCat
};