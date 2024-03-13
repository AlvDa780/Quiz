export async function GET({params, }) {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex')
    const data = await res.json()
   
    return Response.json({ data })
  }