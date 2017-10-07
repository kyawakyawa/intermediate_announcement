const vue = new Vue({
	el : "#vue",
	data : {
		count : 1,
		seen1 : false,
		seen2 : false,
		methods : [
			'部屋番号を入力させる(できそう)',
			'カテゴリごとにわけたブースから選択させる(できそう)',
			'地図から選ばせる(難しそう)'
		],
		dones : [
			'Vue.jsによる入力フォームの作成(途中)',
			'Grimoire.jsによる3D地図とルートの描画(A氏)',
			'描画するルートの頂点計算プログラム(C++!)',
			'CSS'
		],
		todos : [
			'理科大の平面図やブースの情報を手に入れる(大切)',
			'ブース間のルートを予め計算しておく',
			'スマホで3D地図を動かせるようにする',
			'見た目をもっと良くする',
			'データベースサーバーを作って検索された回数などを管理する',
			'それに基づいてクライアント側でおすすめのブースを表示させる',
			'サーバーとクライアント間のデータのやり取り'
		]
	},
	methods : {
		forward : function (){
			this.seen1 = false
			this.seen2 = false
			if(this.count < 4)
				this.count++;
		},
		backward : function (){
			this.seen1 = false
			this.seen2 = false
			if(this.count > 1)
				this.count--;
		},
		clicked1: function () {
			this.seen1 = !this.seen1;
		},
		clicked2: function (){
			this.seen2 = !this.seen2;
		},
		isShow1: function(){
			return this.count == 1;
		},
		isShow2: function(){
			return this.count == 2;
		},
		isShow3: function(){
			return this.count == 3;
		},
		isShow4: function(){
			return this.count == 4;
		}
	}
})

