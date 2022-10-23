/* eslint-disable */

class CommentsHelper {
  constructor() {
    this._button = document.querySelector('#comments-button');
    this._commentsContainer = document.querySelector('#anycomment-app');
    this._loader = document.querySelector('#comments-loader');
    this._loadComments = this._loadComments.bind(this);
    this._commentsObserverId = null;
    this.phone
  }

  _loadComments() {
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

    this._hideButton();
    this._showLoader();
    this._startCommentObserver();
  }

  _hideButton() {
    this._button.style.display = 'none';
  }

  _hideLoader() {
    this._loader.style.display = 'none';
  }

  _showLoader() {
    this._loader.style.display = 'block';
  }

  _startCommentObserver() {
    this._commentsObserverId = setInterval(() => {
      if(this._commentsContainer.firstChild) {
        clearInterval(this._commentsObserverId);
        this._hideLoader();
        console.log(document.querySelector('.CommentForm__SubmitButtonWrapper-sc-1dhzlie-5'))
      }
    }, 16)
  }

  init() {
    this._button.addEventListener('click', this._loadComments);
  }
}

const commentsHelper = new CommentsHelper();
export default commentsHelper;
