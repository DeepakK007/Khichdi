let getIdApp:object = document.getElementById('app');
getIdApp.innerHTML = '<table>'
for(let i:number = 0; i<30;i=i+1){
    getIdApp.innerHTML += `<tr>
    <td>Deepak Kumar</td><td>Deepak Kumar</td><td>Deepak Kumar</td>
    <tr>`;
    getIdApp.style.backgroundColor = "Red";
    getIdApp.style.display = "flex";
    getIdApp.style.alignItems = "center";
    getIdApp.style.justifyContent = "center";
    getIdApp.style.flexDirection = 'column';
}
getIdApp.innerHTML += '</table>'
