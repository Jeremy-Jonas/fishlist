const connection = require('./')

function get (db = connection) {
  return db('fish')
    .join('levels', 'fish.level_id', '=', 'levels.id')
    .select()
}

function createFish (
  newFish,
  fishDetail,
  db = connection
) {
  return db('fish')
    .insert(newFish)
    .then((res) => db('fish_details').insert({
      ...fishDetail,
      fish_id: res[0]
    }))
}

function deleteFish (
  fishId,
  db = connection) {
  return db('fish')
        .where('id', fishId)
        .del()
}



module.exports = {
  get,
  createFish,
  deleteFish
}
