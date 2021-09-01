const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('user').style.display = displayStyle;
}

const loadSingleUser = () => {
    toggleSpinner('block');
    toggleSearchResult('none')
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}

loadSingleUser();

const displaySingleUser = user => {
    console.log(user);
    const container = document.getElementById('user');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${user.picture.thumbnail}">
    <p>${user.name.first}</p>
    <p>${user.gender}</p>
     <p>${user.email}</p>
    `;
    container.appendChild(div);
    toggleSpinner('none');
    toggleSearchResult('block')
}