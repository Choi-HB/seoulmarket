const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

// The replacement logic
const langFunctionUpdates = `
    const footerTerms = document.getElementById("footer-terms");
    if (footerTerms) footerTerms.textContent = t.footerTerms;

    // Articles Section
    const articlesTitle = document.getElementById("articles-title");
    if (articlesTitle) articlesTitle.textContent = t.articlesTitle;
    
    document.querySelectorAll(".read-more-text").forEach(el => {
        el.innerHTML = t.readMore;
    });

    const articleGwangjangTitle = document.getElementById("article-gwangjang-title");
    if (articleGwangjangTitle) articleGwangjangTitle.textContent = t.articleGwangjangTitle;
    const articleGwangjangDesc = document.getElementById("article-gwangjang-desc");
    if (articleGwangjangDesc) articleGwangjangDesc.textContent = t.articleGwangjangDesc;

    const articleNamdaemunTitle = document.getElementById("article-namdaemun-title");
    if (articleNamdaemunTitle) articleNamdaemunTitle.textContent = t.articleNamdaemunTitle;
    const articleNamdaemunDesc = document.getElementById("article-namdaemun-desc");
    if (articleNamdaemunDesc) articleNamdaemunDesc.textContent = t.articleNamdaemunDesc;

    const articleMangwonTitle = document.getElementById("article-mangwon-title");
    if (articleMangwonTitle) articleMangwonTitle.textContent = t.articleMangwonTitle;
    const articleMangwonDesc = document.getElementById("article-mangwon-desc");
    if (articleMangwonDesc) articleMangwonDesc.textContent = t.articleMangwonDesc;

    const articleNoryangjinTitle = document.getElementById("article-noryangjin-title");
    if (articleNoryangjinTitle) articleNoryangjinTitle.textContent = t.articleNoryangjinTitle;
    const articleNoryangjinDesc = document.getElementById("article-noryangjin-desc");
    if (articleNoryangjinDesc) articleNoryangjinDesc.textContent = t.articleNoryangjinDesc;

    const articleTonginTitle = document.getElementById("article-tongin-title");
    if (articleTonginTitle) articleTonginTitle.textContent = t.articleTonginTitle;
    const articleTonginDesc = document.getElementById("article-tongin-desc");
    if (articleTonginDesc) articleTonginDesc.textContent = t.articleTonginDesc;

    const articleGyeongdongTitle = document.getElementById("article-gyeongdong-title");
    if (articleGyeongdongTitle) articleGyeongdongTitle.textContent = t.articleGyeongdongTitle;
    const articleGyeongdongDesc = document.getElementById("article-gyeongdong-desc");
    if (articleGyeongdongDesc) articleGyeongdongDesc.textContent = t.articleGyeongdongDesc;

    const articleDongdaemunTitle = document.getElementById("article-dongdaemun-title");
    if (articleDongdaemunTitle) articleDongdaemunTitle.textContent = t.articleDongdaemunTitle;
    const articleDongdaemunDesc = document.getElementById("article-dongdaemun-desc");
    if (articleDongdaemunDesc) articleDongdaemunDesc.textContent = t.articleDongdaemunDesc;
`;

const targetRegex = /    const footerTerms = document\.getElementById\("footer-terms"\);\s*if \(footerTerms\) footerTerms\.textContent = t\.footerTerms;/g;

if (targetRegex.test(mainJs)) {
    mainJs = mainJs.replace(targetRegex, langFunctionUpdates);
    fs.writeFileSync('main.js', mainJs, 'utf8');
    console.log("main.js updated");
} else {
    console.log("Could not find the target string in main.js");
}
