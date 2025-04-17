// const host = 'http://localhost';
const host = 'https://alephbet-server.onrender.com';
// const port = 3000;
const port = 443;

export async function addData(image, label) {
    const raw = {
        image,
        label
    };
    const requestOptions = {
        method: "POST",        
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(raw)
    }

    try {
        const request = await fetch(`${host}:${port}/api/add-example`, requestOptions);
        const data = await request.json();
        console.log('Server response:', data);
        return data.labels;
    } catch (e) {
        console.log('Error: ',e.message);
    }
}

export async function trainModel() {
    const requestOptions = {
        method: "POST"
    }
    try {
        const response = await fetch(`${host}:${port}/api/train`, requestOptions);
        const text = await response.text();
        console.log('Training response:', text);

    } catch (e) {
        console.log('Error: ', e.message);
    }

}

export async function hello() {
    const requestOptions = {
        method: "POST"
    }
    try {
        const response = await fetch(`${host}:${port}/api/hello`, requestOptions);
        const text = await response.text();
        console.log('Hello response:', text);

    } catch (e) {
        console.log('Error: ', e.message);
    }

}

export async function predict(image) {

    const requestOptions = {
        method: "POST",        
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ image })
    }

    try {
        const request = await fetch(`${host}:${port}/api/predict`, requestOptions);
        const text = await request.text();
        console.log('Server response:', text);
        return text;
    } catch (e) {
        console.log('Error: ',e.message);
    }

}