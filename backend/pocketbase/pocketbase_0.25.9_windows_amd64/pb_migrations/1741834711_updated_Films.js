/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "select1536382321",
    "maxSelect": 1,
    "name": "Genree",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Animation",
      "Thriller",
      "Comédie",
      "Drame"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "select1536382321",
    "maxSelect": 1,
    "name": "Genree",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Animation",
      "Horreur",
      "Action"
    ]
  }))

  return app.save(collection)
})
