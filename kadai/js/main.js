const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

  
// 登録ボタンが押された時
const book_register_btn = document.getElementById('book-register');

book_register_btn.addEventListener('click', book_register);

function book_register() {

  // 本のタイトルをkeyとして取得
  const key = $("#book-title").val();
  //console.log(key);
  // 概要の取得
  const book_overview = $("#book-overview").val();
  //console.log(book_overview);
  // ステータスの取得
  const book_status = $('input[name="status"]:checked').val();
  //console.log(book_status);
  // 星レビューの取得
  const book_review = $('input[name="review"]:checked').val();
  //console.log(book_review);
  
  // 格納用のデータ作成
  const book_data = {
    'book_overview' : book_overview,
    'book_status' : book_status,
    'book_review' : book_review,
  };
  console.log(book_data.book_overview);

  // ローカルストレージに保存
  localStorage.setItem(key, book_data);

  // 表示
  const html = '<tr><th style="width: 10%"><img src="img/book_sample.png" alt="sample"></th> <td style="width: 60%"><div class="book-content"><h1>' + key + '</h1><h3>' + book_data.book_overview + '</h3><div class="status-btn"> <input type="radio" checked id="11" name="example3"><label for="11">購入検討</label> <input type="radio" id="12" name="example3"><label for="12">未読</label> <input type="radio" id="13" name="example3"><label for="13">読書中</label> <input type="radio" id="14" name="example3"><label for="14">読了</label> </div> </div> </td> <td style="width: 20%" align="center"> <div class="stars"> <span> <!-- データ取得の都合上valueの値を反転 --> <input id="review01" type="radio" name="review" value="5"><label for="review01">★</label> <input id="review02" type="radio" name="review" value="4"><label for="review02">★</label> <input id="review03" type="radio" name="review" value="3"><label for="review03">★</label> <input id="review04" type="radio" name="review" value="2"><label for="review04">★</label> <input id="review05" type="radio" name="review" value="1"><label for="review05">★</label> </span> </div> </td> <td style="width: 10%" align="center"> <div class="book-edit"> <button><img src="img/edit_btn.png" alt=""></button> </div> </td> </tr>';

  $("#book-list-table").append(html);

  // モーダルを閉じる
  modal.style.display = 'none';
}