/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1819170229",
    "max": 0,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2787480667",
    "max": 0,
    "min": 0,
    "name": "prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "realisateur",
      "animateur"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "email1361488968",
    "name": "mail",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1734123805",
    "max": 0,
    "min": 0,
    "name": "liste_film_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // remove field
  collection.fields.removeById("relation236217698")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("text2787480667")

  // remove field
  collection.fields.removeById("select1466534506")

  // remove field
  collection.fields.removeById("email1361488968")

  // remove field
  collection.fields.removeById("text1734123805")

  // remove field
  collection.fields.removeById("relation1827947315")

  return app.save(collection)
})
