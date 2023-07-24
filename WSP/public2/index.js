let pageTitle = document.querySelector(".page-title");

let pageTitleStr = pageTitle.title;

for (let char of pageTitleStr) {
  let div = document.createElement("div");
  div.setAttribute("aria-hidden", "true");
  div.className = "word";
  div.textContent = char;
  pageTitle.appendChild(div);
}

let memos = ["網上連儂牆", "香港加油"];

let memoList = document.querySelector(".memo-list");
let memoTemplate = memoList.querySelector(".memo");
memoTemplate.remove();

for (let memo of memos) {
  let node = memoTemplate.cloneNode(true);
  node.querySelector(".memo-content").textContent = memo;
  memoList.appendChild(node);
}
