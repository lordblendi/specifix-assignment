function get<T>(url: string): Promise<T> {
    return fetch(`api/${url}`).then((response) => response.json())
}

export const Api = {
    get,
}

export default Api
