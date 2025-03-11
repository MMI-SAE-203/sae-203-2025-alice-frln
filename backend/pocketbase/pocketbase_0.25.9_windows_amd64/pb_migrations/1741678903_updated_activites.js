/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2690351586",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "imageActivite",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("file2690351586")

  return app.save(collection)
})
