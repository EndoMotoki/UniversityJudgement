function promotion(){
    if(window.confirm('当サービスの結果は100%正確とは限らないため、如何なる結果でも必ずご自身でチェックをしてください。同意できますか？')) {
        location.href = "promotion.html";
    }
    else {
        window.alert('同意できない場合はサービスを提供できません。ありがとうございました。')
        location.href = "index.html";
    }
}

function graduation(){
    if(window.confirm('当サービスの結果は100%正確とは限らないため、如何なる結果でも必ずご自身でチェックをしてください。同意できますか？')) {
        location.href = "graduation.html";
    }
    else {
        window.alert('同意できない場合はサービスを提供できません。ありがとうございました。')
        location.href = "index.html";
    }
}