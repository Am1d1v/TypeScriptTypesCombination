// Conditional Type
var brandRecord = {
    Brand1: {
        name: 'SomeBrandName',
        createdAt: new Date()
    }
};
function PCCatalog(pcCatalog) {
    var _a;
    console.log((_a = pcCatalog.Brand1) === null || _a === void 0 ? void 0 : _a.name);
}
PCCatalog(brandRecord);
var p = {
    screen: window.screen
};
console.log(p);
