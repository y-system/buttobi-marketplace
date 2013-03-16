function install(manifestUrl){
var install = navigator.mozApps.install(manifestUrl);
install.addEventListener('success', function() {
    alert('インストールに成功しました。');
}, false);
install.addEventListener('error', function() {
    alert('インストールに失敗しました。 ' + install.error.name);
}, false);
}