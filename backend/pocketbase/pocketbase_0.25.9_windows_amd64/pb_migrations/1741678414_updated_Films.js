/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("number3543264974")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "date3599098331",
    "max": "",
    "min": "",
    "name": "dateDeSortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3543264974",
    "max": null,
    "min": null,
    "name": "annee_sortie",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("date3599098331")

  return app.save(collection)
})
