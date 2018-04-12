/**
 * ------------------------------------------------------------------
 * 纯 JS 解析 QQ 音乐直链
 *
 * @date	2018-03-08
 * @version	v0.2
 * @author	WincerChan<WincerChan@gmail.com>
 * ------------------------------------------------------------------
 */

/**
 * 封装的 jsonp 跨域函数
 *
 * @param		{string}	url		歌曲信息的请求地址
 * @returns	    {object}	Promise	包含歌曲直链的 Promise 对象
 */
var getJSONP = function (url) {

    /**
     * 创建 <script> 标签
     *
     * @param	{string}	url		歌曲信息的请求地址
     * @returns	{object}	script	script 标签的对象
     */
    var createScript = function (url) {
        let script = document.createElement('script');
        script.setAttribute('src', url);
        document.body.appendChild(script);
        return script;
    };

    //返回一个 Promise 对象
    return new Promise((resolve, reject) => {

        // 获取刚刚生成的 callback 名称
        const cbName = url.match(/.*?callback=(.*)/)[1];
        window[cbName] = function (data) {
            resolve(data);
        };

        //创建 <script> 标签
        const script = createScript(url);
        script.onerror = function () {
            reject('error');
        };
    });
};

var parse = function (smid) {
    /**
     * 将 smid 和 guid 生成请求的 url
     *
     * @param		{string}	smid 	每个歌曲的唯一标识
     * @param		{string}	guid	每次请求随机生成的数字
     * @returns	    {string}	url		歌曲信息的请求地址
     */
    var handleUrl = function (smid, guid) {
        let filename = `C400${smid}.m4a`;

        //请求获得 callback 的名称
        let cbName = getCb();
        let url = `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg\
?format=json&cid=205361747&uin=0&songmid=${smid}\
&filename=${filename}&guid=${guid}&callback=${cbName}`;
        return url;
    };

    /**
     * 随机生成 callback 的名称
     *
     * @param	void
     * @returns	{string}	name	随机生成的英文字符串
     */
    var getCb = function () {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
    };

    /**
     * 获取歌曲最终链接，也是最外层的接口
     *
     * @param		{string}	smid	每个歌曲的唯一标识
     * @returns	    {string}	link	歌曲最终的播放链接
     */
    async function getMusic(smid) {
        let guid = Math.floor(Math.random() * 2147483647) * Math.floor(Date.now() * 1000) % 10000000000;
        let url = handleUrl(smid, guid);

        // 这里必须等待取得 getJSONP 的数据
        let info = await getJSONP(url);
        let filename = info.data.items[0].filename;
        let vkey = info.data.items[0].vkey;
        return `https://dl.stream.qqmusic.qq.com/${filename}?vkey=${vkey}&guid=${guid}&uin=0&fromtag=66`;
    }
    return getMusic(smid);
}
console.log(await parse('0041FwTv0Ai3Ku'))