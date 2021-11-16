function get_value(){
    var slider = document.getElementById("slider");
    console.log(slider.value);

    var svgimg = document.getElementById("svgimg");
    svgimg.setAttribute("d","M"+slider.value+" 0 q50 10 10 50");
}

function copyToClipboard(text){
    // テキストコピー用の一時要素を作成
    const pre = document.createElement('pre');
  
    // テキストを選択可能にしてテキストセット
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';
    pre.textContent = text;
  
    // 要素を追加、選択してクリップボードにコピー
    document.body.appendChild(pre);
    document.getSelection().selectAllChildren(pre);
    const result = document.execCommand('copy');
  
    // 要素を削除
    document.body.removeChild(pre);
  
    return result;
  }
  

function copy_to_clip(){
    var svg_code = document.getElementById("svg_code");
    var str = svg_code.innerHTML;
    copyToClipboard(str);
}
