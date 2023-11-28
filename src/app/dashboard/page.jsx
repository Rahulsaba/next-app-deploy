'use client'

export default function Page() {
    async function onSend(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        console.log(formData, 'data');
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            body:
                JSON.stringify(
                    {
                        email: formData.get('email'),
                        password: formData.get('password')
                    }
                )


        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <form onSubmit={onSend}>
            <input type="email" name="email" placeholder="Enter email" className="text-black border boder-black" />
            <br />
            <input type="password" name="password" placeholder="Enter password" className="text-black border boder-black" />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}