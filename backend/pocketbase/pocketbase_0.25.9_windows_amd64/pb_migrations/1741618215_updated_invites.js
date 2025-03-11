/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // remove field
  collection.fields.removeById("relation236217698")

  // remove field
  collection.fields.removeById("relation1827947315")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3295370174",
    "hidden": false,
    "id": "relation236217698",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "represente",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_306231341",
    "hidden": false,
    "id": "relation1827947315",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "presente",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
