const HEADER_CONFIG = {
  method: 'GET',
  mode: 'cors',
  cache: 'force-cache'
}

const API_URI = 'https://pokeapi.co/api/v2'

const queryHandler = async (call: any) => {
  try {
    const resp = await call
    if (resp) {
      return resp.json()
    } else {
      throw(new Error('resource not found'))
    }
  } catch (e) {
    throw(e)
  }
}

/*
 * Gets a pokemon's data by ID
 */
export const getPokemonById = (id) => {
  if (!id || id < 1 || id > 151) {
    throw(new Error('invalid id'))
  }
  const call = fetch(`${API_URI}/pokemon/${id}`, HEADER_CONFIG)
  return queryHandler(call)
}

export const getPokemonByName = (name) => {
  if (!name) {
    throw(new Error ('invalid name'))
  }
  const call = fetch(`${API_URI}/pokemon/${name}`, HEADER_CONFIG)
  return queryHandler(call)
}
