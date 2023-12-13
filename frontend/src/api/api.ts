function get<T>(url: string): Promise<T> {
    return fetch(`http://localhost:5000/${url}`).then((response) => response.json())
}

export const Api = {
    get,
}

export default Api
