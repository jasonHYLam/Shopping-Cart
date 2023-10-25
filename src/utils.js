export async function getDataFromId(id) {

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,
        {mode: 'cors'})

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

    const data = await response.json()

    return {
        title: data.title,
        imageUrl: data.image,
        price: data.price,
        category: data.category,
    }

    }

    catch (error) {
        console.log(`Could not get products: ${error}`);
    }
}

export async function testgetData() {

        const response = await fetch(`https://fakestoreapi.com/products`,
        {mode: 'cors'})

        const data = await response.json()
        console.log(data)
}