window.reqListener = function () {
    var res = JSON.parse(this.responseText);

    // Articles section
    var articles = document.getElementById('articles');

    for (i = 0; i < res.posts.length; i++) {
        var post = res.posts[i];

        // Container (anchor)
        var a = document.createElement('a');
        a.setAttribute('href', post.url);
        a.setAttribute('aria-labelledby', post.id);

        // Article
        var article = document.createElement('article');

        // Date element
        var pDate = document.createElement('p');
        pDate.className = 'w5';
        pDate.innerText = post.date;
        article.appendChild(pDate);

        // Title
        var h3 = document.createElement('h3');
        h3.setAttribute('id', post.id);
        h3.innerText = post.title;
        article.appendChild(h3);

        // Image
        var img = document.createElement('img');
        img.setAttribute('src', post.image);
        img.setAttribute('alt', '記事の写真');
        article.appendChild(img);

        // Description
        var pDesc = document.createElement('p');
        pDesc.innerText = post.description;
        article.appendChild(pDesc);

        // Read more
        var pMore = document.createElement('p');
        pMore.className = 'cl-green w5';
        pMore.innerHTML = '詳しくはこちら　&rarr;';
        article.appendChild(pMore);


        a.appendChild(article);

        articles.appendChild(a);
    }
  }

if (document.location.pathname === '/blog/') {
    var environment = document.location.host.indexOf('.dev') === -1 ? 'production' : 'staging';

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener, { once: true });
    oReq.open("GET", 'https://blog.openrm.jp/posts-' + environment + '.json');
    oReq.send();
}