//import params from './config';

const url = 'https://api.spotify.com/v1/';
let accessToken = '';

if (!window.location.hash) {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${cfgparams.clientID}&response_type=token&redirect_uri=${cfgparams.redirectUri}&scope=user-library-read`;
} else {
    const params = new URLSearchParams(String(window.location.hash.substring(1)));
    window.location.hash = '';
    accessToken = params.get('access_token');
    getData();
}

async function getData () {
    let requestUrl = url + 'me/albums?limit=50';
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    let first = true;

    while(requestUrl) {
        const response = await httpsRequest(requestUrl, requestOptions);

        if(first) {
            first = false;
            document.querySelector("#information").innerText = `You have ${response.total} albums saved`;
        }

        for(let i = 0; i < response.items.length; i++) {
            document.querySelector("#album-list").innerHTML += `<li>${response.items[i].album.name}</li>`;
        }

        requestUrl = response.next;
    }
}

async function httpsRequest (requestUrl, requestOptions) { 
    try {
        const response = await fetch(requestUrl, requestOptions);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            console.log('Network error');
        }
    } catch (err) {
        console.log(requestUrl);
        console.log(err.message);
        console.log(requestUrl);
    }
}
