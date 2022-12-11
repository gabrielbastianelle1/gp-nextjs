import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios
            .get('http://localhost:3000/api')
            .then((response) => setUser(response.data))
    })

    return <div>{user.name}</div>
}
