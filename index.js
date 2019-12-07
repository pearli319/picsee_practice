var member = new Vue({
    el: "#list",
    data: {
        cando: {
            "自己決定短網址後面的字串": true,
            "設定不同裝置導向不同網址": true,
            "瀏覽短網址記錄，檢視點擊統計報表": true,
            "編輯、抽換短網址": true,
            "刪除縮過的網址": true,
            "建立群組帳號，共同管理、檢視短網址報告": false,
            "匯出短網址成效報告": false,
            "將短網址成效追蹤資訊設為私人檢視": true,
            "自動帶入Google Tag Manager、Facebook像素、和UTM": false,
            "將文章作者（顯示在PO文最下方）設為自己的粉絲專頁": false
        }
    },
});