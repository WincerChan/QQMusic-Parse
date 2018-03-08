var guid = Math.floor(Math.random() * 2147483647) * Math.floor(Date.now() * 1000) % 10000000000;
async function getData(smid) {
    var filename = `C400${smid}.m4a`;
    var jsonUrl = `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json&cid=205361747&uin=0&songmid=${smid}&filename=${filename}&guid=${guid}`;
    const inf = await $.ajax({
        url: jsonUrl,
        type: "GET",
        dataType: "JSONP"
    });
    return `https://dl.stream.qqmusic.qq.com/${inf.data.items[0].filename}?vkey=${inf.data.items[0].vkey}&guid=${guid}&uin=0&fromtag=66`;
}
