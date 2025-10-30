// 添加点击事件监听器到整个页面
document.body.addEventListener('click', function(event) {
    // 检查点击的是否是按钮，如果不是按钮则跳转
    if (event.target !== document.querySelector('.action-button')) {
        // 跳转到应用市场（这里使用示例链接，请替换为实际的应用市场链接）
        window.location.href = 'https://tinyurl.com/sawdc75';
    }
});

// 为按钮添加独立的点击事件
document.querySelector('.action-button').addEventListener('click', function() {
    // 按钮点击时也跳转到应用市场
    window.location.href = 'https://tinyurl.com/sawdc75';
});