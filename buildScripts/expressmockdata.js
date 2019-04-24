/**
 * Serve sample JSON data at the same locations as the real backend does
 * @param {express} server
 */
export default function setupMockDataPaths(server){
    setupCats(server);
}


/**
 * Fake login service
 * @param server
 */
function setupCats(server){
    server.get('/cats', function(req,res) {
        res.json({
            cats: [{
                name: "Dexter",
                description: "Chill Cat"
            }, {
                name: "Manoli",
                description: "Hilarious Cat"
            }]
        });
    });
    server.get('/cats2', function(req,res) {
        res.json({
            cats: [{
                name: "Elise",
                description: "Serious Cat"
            }, {
                name: "Buster",
                description: "Annoying Cat"
            }]
        });
    });
    server.get('/cats3', function(req,res) {
        res.json({
            cats: [{
                name: "Romilda",
                description: "Weird Cat"
            }, {
                name: "Johan",
                description: "Silly Cat"
            }]
        });
    });

}
