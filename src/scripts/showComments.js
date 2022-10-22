const commentsButton = document.querySelector('#comments-button');
/* eslint-disable */
commentsButton.addEventListener('click', () => {
  const script = document.createElement("script");
  script.innerHTML = `
  var AnyComment = window.AnyComment || [];
  AnyComment.Comments = [];
  AnyComment.Comments.push({
    "root": "anycomment-app",
    "app_id": 4569,
    "language": "ru"
  })
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.anycomment.io/comment/embed.js";
  var sa = document.getElementsByTagName("script")[0];
  sa.parentNode.insertBefore(s, s.nextSibling);
  console.log(AnyComment, script.inject)
  `;
  script.type = "text/javascript";
  var scriptTag = document.getElementsByTagName("script")[0];
  scriptTag.parentNode.append(script);
  commentsButton.remove();
});
