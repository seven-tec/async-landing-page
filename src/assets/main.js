const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCAQe8GPQ0WC-o2VZ1WlwA-g&part=snippet%2Cid&order=date&maxResults=7';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4d7c8b8e4mshe4f95db16b1fc6ap1c9e39jsnbd37fe67e6d1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none transition duration-500 ease-in-out hover:text transform hover:translate-y-1 hover:scale-110">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
                </div>
                <div class="mt-4 flex justify between text-light-blue">
                    <h3 class="text-md font-bold">
                        <span class="lg:text-md"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();