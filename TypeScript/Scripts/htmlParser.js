var getIdApp = document.getElementById('app');
getIdApp.innerHTML = '<table>';
for (var i = 0; i < 30; i = i + 1) {
    getIdApp.innerHTML += "<tr>\n    <td>Deepak Kumar</td><td>Deepak Kumar</td><td>Deepak Kumar</td>\n    <tr>";
    getIdApp.style.backgroundColor = "Red";
    getIdApp.style.display = "flex";
    getIdApp.style.alignItems = "center";
    getIdApp.style.justifyContent = "center";
    getIdApp.style.flexDirection = 'column';
}
getIdApp.innerHTML += '</table>';
