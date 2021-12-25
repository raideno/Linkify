export default function getAll() {

    chrome.storage.local.get({
        links: []
    }, function (result) {
        var links = result.links;
        links.push({ links: link, title, description, keywords, category });
        chrome.storage.local.set({
            links: links
        }, function () {
            chrome.storage.local.get('links', function (result) {
                console.log(result.links)
            });
        });
    });

}