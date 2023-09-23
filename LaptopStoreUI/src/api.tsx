export default async function getLaptops() {
    const res = await fetch(`https://localhost:44387/api/Laptop`);
    if(!res.ok){
        throw{
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data as laptopType[]
}