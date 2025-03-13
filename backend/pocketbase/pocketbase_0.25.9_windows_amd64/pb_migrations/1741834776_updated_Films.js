/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("text2203071480")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "select1536382321",
    "maxSelect": 1,
    "name": "Genre",
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

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2203071480",
    "max": 0,
    "min": 0,
    "name": "genre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

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
})
