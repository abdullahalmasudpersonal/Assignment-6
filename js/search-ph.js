const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    //clear search
    searchField.value = '';

    //load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `            
        <div class="card h-100">
            <img src="${data.image}" class="card-img-top" alt=".">
            <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <h6 class="card-title" >${data.brand}</h6>
                <p class="card-text">${data.slug}</p>
            </div>
            <button onclick="loadPhoneDetail('${data.slug}')"
            class="color w-50 mx-auto mb-4 mt-4"> Details
            </button>
        </div>
        `;
        searchResult.appendChild(div);

    })
}

const loadPhoneDetail = slug => {
    // console.log(slug);
    const url = ` https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data.mainFeatures));
}

const displayPhoneDetail = data => {
    console.log(data);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top">
    <div class="card-body">
        <p class="card-text">${data.releaseDate}</p>
        <p class="card-text">${data.slug}</p>
        <p class="card-text">${data.name}</p>
        <h5 class="card-title">${data.storage}</h5>
        <p class="card-text">${data.displaySize}</p>
        <p class="card-text">${data.chipSet}</p>
        <p class="card-text">${data.memory}</p>
        <p class="card-text">${data.sensors[1]}</p>
    </div>
    `;
    phoneDetails.appendChild(div);
}
