(() => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        let url = tabs[0].url
        let smid = url.match('y.qq.com/n/yqq/song/(.*).html*')
        if (smid === null) {
            let p = document.getElementById('p-id')
            document.body.removeChild(document.getElementById('link'))
            document.body.removeChild(document.getElementById('button'))
            p.innerHTML = "无法匹配，请确认当前 url 为歌曲详情页"
        }
    })
})()

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', main);

})

function copyToBoard() {
    let copyText = document.getElementById("link");
    copyText.select()
    document.execCommand("Copy")
    console.log(copyText.value)
}

function main(element) {
    let p = document.getElementById('p-id')
    chrome.tabs.getSelected(null, function (tab) {
        let url = tab.url;
        let smid = url.match('y.qq.com/n/yqq/song/(.*).html*')[1]
        if (smid !== null) {
            let pro1 = getMusic(smid)
            let input = document.getElementById('link')

            pro1.then(function (value) {
                p.innerHTML = `链接已复制至剪贴板，如无效请手动复制`
                input.value = value
                copyToBoard()
            })
        }
    })
}
