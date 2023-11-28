


const Next_BASE_API = process.env.Main_Api;


export const serverLogin = async (formData) => {
    try {
        const response = await fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return data = await response.json();
    } catch (error) {
        console.error('Error during POST request:', error);
    }
}



export const fetchData = async () => {
    const data = await fetch(`${Next_BASE_API}users`,
        {
            // no-store every time fetch data in Api 
            cache: 'no-store'
        });

    if (!data.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return data.json();
}

