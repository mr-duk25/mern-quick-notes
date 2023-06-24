
const BASE_URL = '/api/notes';

export async function create(note) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note })
    });
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Something Went Wrong')
    }
}