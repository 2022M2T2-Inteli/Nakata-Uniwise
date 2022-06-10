const Database = require('./db')

function saveOrphanage(db, orphanage) {
    return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        weekend_friendly
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.weekend_friendly}"
        );
`)
}

module.exports = saveOrphanage;