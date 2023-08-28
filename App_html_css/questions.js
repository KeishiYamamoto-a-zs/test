/*******　json形式で全ての質問を定義し、グローバル変数に格納 ********/
window.questions =  [
  {
    "number":"1", 
    "sentence": "1:社員の方々の年齢層はどちらが多いですか？",
    "option1":{"number":1,"name":"若年層","nextQuestionNumber":3,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"中年層","nextQuestionNumber":2,"isThisLastOption":false,"href":""}

  },
  {
    "number":"2", 
    "sentence": "2:ゲームでよく遊ぶ方は多いですか？",
    "option1":{"number":1,"name":"はい","nextQuestionNumber":6,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"いいえ","nextQuestionNumber":4,"isThisLastOption":false,"href":""}

  },
  {
    "number":"3", 
    "sentence": "3:ゲームでよく遊ぶ方は多いですか？",
    "option1":{"number":1,"name":"はい","nextQuestionNumber":6,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"いいえ","nextQuestionNumber":5,"isThisLastOption":false,"href":""}

  },
  {
    "number":"4", 
    "sentence": "4:昔はゲームでよく遊んでいた方が多いですか？",
    "option1":{"number":1,"name":"はい","nextQuestionNumber":7,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"いいえ","nextQuestionNumber":5,"isThisLastOption":false,"href":""}

  },
  {
    "number":"5", 
    "sentence": "5:競技やスポーツといった「eスポーツ要素」と、\nレクリエーションやゲームといった「娯楽的要素」\nのどちらを重視されますか？",
    "option1":{"number":1,"name":"eスポーツ","nextQuestionNumber":1,"isThisLastOption":true,"href":"result7.html"},
    "option2":{"number":2,"name":"娯楽","nextQuestionNumber":13,"isThisLastOption":false,"href":""}

  },
  {
    "number":"6", 
    "sentence": "6:個人戦とチーム戦では、どちらをお好きな方が多いですか？",
    "option1":{"number":1,"name":"個人戦","nextQuestionNumber":9,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"チーム戦","nextQuestionNumber":8,"isThisLastOption":false,"href":""}

  },
  {
    "number":"7", 
    "sentence": "7:レースゲームと格闘ゲームでは、どちらをお好きな方が多いですか？",
    "option1":{"number":1,"name":"レースゲーム","nextQuestionNumber":1,"isThisLastOption":true,"href":"result6.html"},
    "option2":{"number":2,"name":"格闘ゲーム","nextQuestionNumber":1,"isThisLastOption":true,"href":"result3.html"}

  },
  {
    "number":"8", 
    "sentence": "8:競技やスポーツといった「eスポーツ要素」と、\nレクリエーションやゲームといった「娯楽的要素」\nのどちらを重視されますか？",
    "option1":{"number":1,"name":"eスポーツ","nextQuestionNumber":11,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"娯楽","nextQuestionNumber":1,"isThisLastOption":true,"href":"result4.html"}

  },
  {
    "number":"9", 
    "sentence": "9:競技やスポーツといった「eスポーツ要素」と、\nレクリエーションやゲームといった「娯楽的要素」\nのどちらを重視されますか？",
    "option1":{"number":1,"name":"eスポーツ","nextQuestionNumber":12,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"娯楽","nextQuestionNumber":10,"isThisLastOption":false,"href":""}

  },
  {
    "number":"10", 
    "sentence": "10:練習が必要なゲームとあまり必要ないゲームでは\nどちらの方がよいですか？",
    "option1":{"number":1,"name":"必要","nextQuestionNumber":1,"isThisLastOption":true,"href":"result5.html"},
    "option2":{"number":2,"name":"不要","nextQuestionNumber":13,"isThisLastOption":false,"href":""}

  },
  {
    "number":"11", 
    "sentence": "11:練習が必要なゲームとあまり必要ないゲームでは\nどちらの方がよいですか？",
    "option1":{"number":1,"name":"必要","nextQuestionNumber":14,"isThisLastOption":false,"href":""},
    "option2":{"number":2,"name":"不要","nextQuestionNumber":1,"isThisLastOption":true,"href":"result7.html"}

  },
  {
    "number":"12", 
    "sentence": "12:シューティングゲームと格闘ゲームの\nどちらをお好きな方が多いですか？",
    "option1":{"number":1,"name":"シューティング","nextQuestionNumber":1,"isThisLastOption":true,"href":"result9.html"},
    "option2":{"number":2,"name":"格闘ゲーム","nextQuestionNumber":1,"isThisLastOption":true,"href":"result3.html"}

  },
  {
    "number":"13", 
    "sentence": "13:オフライン開催とオンライン開催では\nどちらが魅力的ですか？",
    "option1":{"number":1,"name":"オフライン","nextQuestionNumber":1,"isThisLastOption":true,"href":"result6.html"},
    "option2":{"number":2,"name":"オンライン","nextQuestionNumber":1,"isThisLastOption":true,"href":"result2.html"}

  },
  {
    "number":"14", 
    "sentence": "14:シューティングゲームとストラテジーゲームの\nどちらをお好きな方が多いですか？",
    "option1":{"number":1,"name":"シューティングゲーム","nextQuestionNumber":1,"isThisLastOption":true,"href":"result8.html"},
    "option2":{"number":2,"name":"ストラテジーゲーム","nextQuestionNumber":1,"isThisLastOption":true,"href":"result1.html"}

  }
];