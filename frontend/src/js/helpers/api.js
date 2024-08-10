async function api(path, options) {
    return await fetch(import.meta.env.VITE_API_URL + path, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        ...options,
    }).then(response => response.json())
}

export async function post(path, data = {}, options) {
    return await api(path, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options,
    })
}

export default api