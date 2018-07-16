const ApiManager = Object.create({}, {
  getAll: {
    value: (collectionName) => {
      return fetch(`http://localhost:5002/${collectionName}`)
      .then(e => e.json())
    }
  },
  deleteItem: {
    value: (collectionName, itemId) => {
      // Delete the specified animal from the API
      return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
          method: "DELETE"
      })
      // When DELETE is finished, retrieve the new list of animals
      // .then(() => {
      //     // Remember you HAVE TO return this fetch to the subsequenet `then()`
      //     return fetch(`http://localhost:5002/${collectionName}`)
      // })
      // // Once the new array of animals is retrieved, set the state
      // .then(a => a.json())
    }
  }
})

export default ApiManager
